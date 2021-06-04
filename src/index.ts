require('dotenv').config()
const app = require('./config/server')
//Start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'))
})

app.connect();
