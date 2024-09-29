import http from "node:http"


//request é a pergunta
//response é a resposta do servidor
const server = http.createServer((request, response)=>{
return response.end("Sucesso. Deu tudo certo")
})

server.listen(3333)


