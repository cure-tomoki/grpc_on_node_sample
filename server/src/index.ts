import * as grpc from 'grpc';

const address = '0.0.0.0';
const port = 8080;

const server = new grpc.Server();

server.bind(
  `${address}:${port}`,
  grpc.ServerCredentials.createInsecure(),
);

// TODO: add services

server.start();

// eslint-disable-next-line no-console
console.log(`server running at http://${address}:${port}/`);
