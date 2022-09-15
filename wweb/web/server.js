const http = require("http");

let server = http.createServer((request, response) => {
  console.log("URL:", request, url);
  console.log("method:", request.method);

  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end("<h1>olá</h1>");
      break;
    case "/user":
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(
        JSON.stringify({
          users: [{
              name: "aula03",
              turma: "ADS Tarde",
              disciplina: "progweb2",
              id: 1,
            }],
         
      
          }));
      break;
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor está rodando");
});
