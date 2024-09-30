export function extractQueryParams(query) {
  // Verifica se 'query' é uma string válida e não undefined
  if (!query || typeof query !== 'string') {
      return {}; // Retorna um objeto vazio se a query for inválida
  }

  return query
      .slice(1) // Remove o '?' inicial da query string
      .split("&") // Divide os parâmetros por '&'
      .reduce((queryParams, param) => {
          const [key, value] = param.split("=");
          queryParams[decodeURIComponent(key)] = decodeURIComponent(value); // Decodifica chave e valor
          return queryParams; // Retorna o objeto acumulador
      }, {});
}
