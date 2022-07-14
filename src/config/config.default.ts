import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1657791187241_6422',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
  jsonp: {
    callback: 'jsonp',
    limit: 512,
  },
} as MidwayConfig;
