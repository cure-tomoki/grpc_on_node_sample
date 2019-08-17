// package: 
// file: todo.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class TodoCreateRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): void;

    getStatus(): boolean;
    setStatus(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TodoCreateRequest): TodoCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoCreateRequest;
    static deserializeBinaryFromReader(message: TodoCreateRequest, reader: jspb.BinaryReader): TodoCreateRequest;
}

export namespace TodoCreateRequest {
    export type AsObject = {
        text: string,
        status: boolean,
    }
}

export class TodoResponse extends jspb.Message { 
    getText(): string;
    setText(value: string): void;

    getStatus(): boolean;
    setStatus(value: boolean): void;

    getDatetime(): number;
    setDatetime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoResponse;
    static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
    export type AsObject = {
        text: string,
        status: boolean,
        datetime: number,
    }
}
