const http = require('http');

const srv = http.createServer((req, res) => {
    const userAgent = req.headers["user-agent"] || '';
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(userAgent);
    res.end();
});

srv.listen(3000, () => {
    console.log("Server start.");
});