// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_TodoCreateRequest(arg) {
  if (!(arg instanceof todo_pb.TodoCreateRequest)) {
    throw new Error('Expected argument of type TodoCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoCreateRequest(buffer_arg) {
  return todo_pb.TodoCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoResponse(arg) {
  if (!(arg instanceof todo_pb.TodoResponse)) {
    throw new Error('Expected argument of type TodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoResponse(buffer_arg) {
  return todo_pb.TodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  postTodo: {
    path: '/TodoService/PostTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.TodoCreateRequest,
    responseType: todo_pb.TodoResponse,
    requestSerialize: serialize_TodoCreateRequest,
    requestDeserialize: deserialize_TodoCreateRequest,
    responseSerialize: serialize_TodoResponse,
    responseDeserialize: deserialize_TodoResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
