# static codegen with protoc (https://www.npmjs.com/package/protoc)

#!/usr/bin/env bash

set -eu

export PATH="$PATH:$(yarn bin)"

PROTO_SRC=./proto
PROTO_DEST=./server/src/proto # protocol buffer js location
PROTO_D_DEST=./types/proto    # protocol buffer d.ts location

mkdir -p ${PROTO_DEST}
mkdir -p ${PROTO_D_DEST}

# statically generate protocol buffer js code with protoc compiler
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${PROTO_DEST} \
  --grpc_out=${PROTO_DEST} \
  --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*

# generate typescript definition files from previously built js
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=$(npm bin)/protoc-gen-ts \
  --ts_out=${PROTO_D_DEST} \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*
