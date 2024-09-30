import http from "node:http"
import {jsonBodyHandler} from "./middleware/jsonBodyHandler.js"
import { routeHandler } from "./middleware/routerHandler.js"

//request é a pergunta
//response é a resposta do servidor
const server = http.createServer(async(request, response)=>{
    await jsonBodyHandler(request, response)
    routeHandler(request, response)

    
})

server.listen(3333)


