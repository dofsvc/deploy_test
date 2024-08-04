const http = require("http")
const serv = http.createServer((req, res) => {
    res.write("hellow world");
    res.end();
})
serv.listen(8080);