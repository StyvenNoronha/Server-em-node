import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/produts",
    controller: ({request, response, database}) => {
      const products = database.select("products")
      console.log(request.query)

      return response.end(JSON.stringify(products));
    },
  },
  {
    method: "POST",
    path: "/produts",
    controller: ({request, response, database}) => {
      const {name, price} = request.body
      database.insert("products",{name, price})
      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/produts/:id",
    controller: ({request, response}) => {
      return response.end("Produto removido: " + request.params.id );
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
