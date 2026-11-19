// テスト (node) 用: cljs-ajax が node で読み込む npm の xmlhttprequest の代わり。
// テストは通信しないイベントだけなので、中身は空でよい
module.exports = { XMLHttpRequest: function XMLHttpRequest() {} };
