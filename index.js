console.log("test!");

//**npm i nodemon -g** => it monitors your files and when you save it automatically restarts the server so we're not always have to restart
//**npm init **/
//*npm i uuid */ =>  it allow us to generate ids different for each enttry
 

const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

console.log(uuid())