require('dotenv').config()
const app = require('../backend/src/config/server')
//Start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'))
})