import express from 'express';
import { createServer as createViteServer } from 'vite';
import { render } from './dist/server/entry-server';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  });

  app.use(vite.middlewares);

  app.use(express.static('dist/client'));

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template = await vite.transformIndexHtml(url, `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vite SSR</title>
          </head>
          <body>
            <div id="app"><!--ssr-outlet--></div>
            <script type="module" src="/entry-client.js"></script>
          </body>
        </html>
      `);

      const appHtml = render();

      template = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(5173, () => {
    console.log('Server is running at http://localhost:5173');
  });
}

createServer();
