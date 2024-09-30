export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    // Substitui os parâmetros da rota por regex de captura
    const withParams = path.replaceAll(routeParametersRegex, "(?<$1>[a-zA-Z0-9-_]+)");

    // Cria um regex para capturar o caminho e a query string opcional
    const pathRegex = new RegExp(`^${withParams}(\\?(?<query>.*))?$`); 

    return pathRegex;
}
