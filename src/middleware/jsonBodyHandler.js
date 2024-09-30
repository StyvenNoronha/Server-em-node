export async function jsonBodyHandler(request, response) {
    //adicionar cada chunk
    const buffers = []
    //Coleta os chunks de dados da requisição
    for await (const chunk of request){
        buffers.push(chunk)
    }
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString( ))
    } catch (error) {
        request.body = null
    }
    response.setHeader("Content-Type","application/json")
}