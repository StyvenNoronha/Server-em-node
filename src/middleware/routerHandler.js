import { routes } from "../routes.js";
import {extractQueryParams} from "../utils/extract-query-params.js"
import { Database } from "../utils/database.js";

const database = new Database()

export function routeHandler(request, response){
    const route = routes.find((route)=>{
        return route.method === request.method && route.path.test(request.url) 
    })
    if(route){
        const routeParams = request.url.match(route.path)
        const {query,...params} = routeParams.groups
        
        request.params = params
        request.query = extractQueryParams(query) ? query : {}
        return route.controller({request, response, database})
    }
    return response.writeHead(400).end("Error. Rota não encontrado")
}