'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fastify_1 = __importDefault(require('fastify'));
const server = (0, fastify_1.default)({});
const host = 'localhost';
const port = 3000;
(async () => {
  console.log(`API server started: http://${host}:${port}`);
  try {
    await server.listen({ host, port });
  } catch (err) {
    console.log('unable to start api server:', err);
    process.exit(1);
  }
})();
process.on('SIGTERM', () => {
  console.log('shutting down api server');
  server.close();
});
//# sourceMappingURL=server.js.map
