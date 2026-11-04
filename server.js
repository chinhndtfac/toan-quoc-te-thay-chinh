const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const parsedUrl = new URL(req.url, 'http://localhost:8080');
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // API ROUTE: /api/users
  if (pathname === '/api/users') {
    const jsonPath = path.join(root, 'users_db.json');
    const jsPath = path.join(root, 'users_db.js');

    if (req.method === 'GET') {
      try {
        if (fs.existsSync(jsonPath)) {
          const content = fs.readFileSync(jsonPath, 'utf8');
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          });
          return res.end(content);
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end('[]');
        }
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ error: err.message }));
      }
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (!Array.isArray(parsed)) {
            res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ error: 'Expected JSON array of users' }));
          }

          // Save users_db.json
          fs.writeFileSync(jsonPath, JSON.stringify(parsed, null, 2), 'utf8');

          // Save users_db.js
          const jsContent = 'window.INITIAL_USERS_DB = ' + JSON.stringify(parsed, null, 2) + ';\nif (typeof module !== "undefined") module.exports = window.INITIAL_USERS_DB;\n';
          fs.writeFileSync(jsPath, jsContent, 'utf8');

          console.log(`[${new Date().toISOString()}] Updated users_db: ${parsed.length} users saved.`);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ ok: true, count: parsed.length }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ error: 'Invalid JSON body: ' + err.message }));
        }
      });
      return;
    }
  }

  // STATIC FILE SERVING
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(root, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Not Found');
  }

  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    'Content-Type': mime[ext] || 'application/octet-stream',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8080, () => {
  console.log('Web server running on http://localhost:8080');
});
