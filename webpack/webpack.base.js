import webpackNodeExternals from 'webpack-node-externals';
import * as path from 'path';

const DEV = 'development';
const PRD = 'production';
const TARGET_CLIENT = 'client';
const TARGET_SERVER = 'server';

class InvalidWebpackConfigError extends Error {
  name = 'InvalidWebpackConfigError';
}

const mode = process.env.NODE_ENV === DEV ? DEV : PRD;
const isEnv = t => t === mode;
const baseConfig = {
  context: path.resolve(__dirname, '../'),
  mode,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  node: {
    console: true,
    global: true,
    process: true,
    __filename: false,
    __dirname: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};

// modify base client-side code
const clientConfig = base => {
  const config = base;
  config.target = 'web';
  config.entry = './client/src/index.tsx';
  config.output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  };
  config.devtool = isEnv(DEV) && 'inline-source-map';
  return config;
};

// modify base server-side code
const serverConfig = base => {
  const config = base;
  config.target = 'node';
  config.entry = './server/src/index.ts';
  config.output = {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
  };
  config.externals = [
    webpackNodeExternals(),
  ];
  return config;
};

export default function constructWebpackConfig(target) {
  let config = {};
  switch (target) {
    case TARGET_CLIENT:
      config = clientConfig(baseConfig);
      break;
    case TARGET_SERVER:
      config = serverConfig(baseConfig);
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(new InvalidWebpackConfigError('"target" is not defined or an invalid value.'));
  }
  return config;
}
