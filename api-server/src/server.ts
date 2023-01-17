import Fastify from 'fastify';

const server = Fastify({});

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
