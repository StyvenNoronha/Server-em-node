import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/produts",
    controller: (request, response) => {
      console.log(request.query)

      return response.end(JSON.stringify(request.query));
    },
  },
  {
    method: "POST",
    path: "/produts",
    controller: (request, response) => {
      return response.writeHead(200).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    path: "/produts/:id",
    controller: (request, response) => {
      return response.end("Produto removido: " + request.params.id );
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
