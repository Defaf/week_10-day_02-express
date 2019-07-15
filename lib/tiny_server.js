//import express library 
const express = require('express')

//create a new app from express()
const app = express()

/*  
start create index path and that take two args (path, the callback function )

=== WE CAN WRITE THE CALLBACK IN DIFFERENT STYLE LIKE THIS IN BELOW == 
const homeAction  =(request, response) => response.send('Hello World!')
app.get('/', homeAction)
*/
app.get('/', (request, response) => response.send('Hello World!'))

app.get('/books', (request, response) => response.send('You have to read!'))

/**
 * here we have to add the port no. e.g. we used here 4741 
 * but we can use another port no. like 3000... etc.
 * also, we can save the port no. in a varible and use it inside the code like this 
 * const port = 4741 
 * app.listen(port, () => console.log('Example app listening on port'+ port+'!))
 * 
 * IF SOME PROBLEMS HAPPENDS IN USING PORT 
 * => MAC: https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac
 * => UBUNTU: https://stackoverflow.com/questions/9346211/how-to-kill-a-process-on-a-port-on-ubuntu
 * => WINDOWS: https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows
 */
app.listen(4741, () => console.log('Example app listening on port 4741!'))
