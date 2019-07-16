const requestLogger = function (request , response , next) {
    console.log(`${new Date()}`)
    console.log(`${request.method} ${request.url}`)
    console.log(`params: ${request.params}`)
    console.log(`body ${JSON.stringify(request.body)}`)
    next()
}
  
module.exports = requestLogger