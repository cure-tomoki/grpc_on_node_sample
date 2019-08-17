// package: 
// file: todo.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    postTodo: ITodoServiceService_IPostTodo;
}

interface ITodoServiceService_IPostTodo extends grpc.MethodDefinition<todo_pb.TodoCreateRequest, todo_pb.TodoResponse> {
    path: string; // "/.TodoService/PostTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.TodoCreateRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.TodoCreateRequest>;
    responseSerialize: grpc.serialize<todo_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoResponse>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer {
    postTodo: grpc.handleUnaryCall<todo_pb.TodoCreateRequest, todo_pb.TodoResponse>;
}

export interface ITodoServiceClient {
    postTodo(request: todo_pb.TodoCreateRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    postTodo(request: todo_pb.TodoCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    postTodo(request: todo_pb.TodoCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public postTodo(request: todo_pb.TodoCreateRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public postTodo(request: todo_pb.TodoCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public postTodo(request: todo_pb.TodoCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
}
