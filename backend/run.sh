#!/bin/bash
export DB_USER=shio_user
export DB_PASSWORD=shiopass
export DB_NAME=shio_walk
export DB_HOST=localhost
export DB_PORT=5432

clj -M:run
