#!/usr/bin/env python3
"""PWA のアイコン (frontend/public/icons/*.png) を作る。外部ライブラリなし (標準の zlib だけ)。

    python3 scripts/make_icons.py

紫のグラデーションの上に、白い足あと 2 つ。maskable (Android が丸や角丸に切り抜く) でも
欠けないよう、絵は中央の 60% に収める。
"""
import math
import os
import struct
import zlib

OUT = os.path.join(os.path.dirname(__file__), "..", "frontend", "public", "icons")

TOP = (0x66, 0x7E, 0xEA)     # #667eea (theme_color)
BOTTOM = (0x76, 0x4B, 0xA2)  # #764ba2
WHITE = (255, 255, 255)

# 足あと (0〜1 の座標)。[(中心x, 中心y, 半径x, 半径y, 傾き度)]
# 左足 (下) と右足 (上) を少しずらして、歩いている形に
def foot(cx, cy, flip):
    s = -1 if flip else 1
    sole = [(cx, cy, 0.075, 0.115, 8 * s)]                      # 足の裏
    heel = [(cx + 0.006 * s, cy + 0.135, 0.055, 0.06, 0)]       # かかと
    toes = [(cx - 0.055 * s + i * 0.032 * s, cy - 0.145 + abs(i - 1.2) * 0.012, 0.022 - i * 0.002, 0.026 - i * 0.002, 0)
            for i in range(4)]                                   # 指 4 本
    return sole + heel + toes

SHAPES = foot(0.40, 0.58, False) + foot(0.60, 0.36, True)


def inside(x, y):
    for cx, cy, rx, ry, deg in SHAPES:
        a = math.radians(deg)
        dx, dy = x - cx, y - cy
        u = dx * math.cos(a) + dy * math.sin(a)
        v = -dx * math.sin(a) + dy * math.cos(a)
        if (u / rx) ** 2 + (v / ry) ** 2 <= 1.0:
            return True
    return False


def render(size, ss=4):
    rows = []
    for py in range(size):
        row = bytearray([0])  # フィルタ種別 0
        t = py / (size - 1)
        bg = [round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3)]
        for px in range(size):
            hit = 0
            for sy in range(ss):
                for sx in range(ss):
                    if inside((px + (sx + 0.5) / ss) / size, (py + (sy + 0.5) / ss) / size):
                        hit += 1
            k = hit / (ss * ss)
            row += bytes(round(bg[i] + (WHITE[i] - bg[i]) * k) for i in range(3))
        rows.append(bytes(row))
    return rows


def write_png(path, size):
    raw = b"".join(render(size))

    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0))
           + chunk(b"IDAT", zlib.compress(raw, 9))
           + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(png)
    print("wrote", os.path.relpath(path), size)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for size, name in [(192, "icon-192.png"), (512, "icon-512.png"), (180, "apple-touch-icon.png")]:
        write_png(os.path.join(OUT, name), size)
