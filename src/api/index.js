const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../../data/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

// Use the port provided by Vercel in the environment variable PORT or default to 8000
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});