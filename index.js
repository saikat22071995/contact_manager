const express=require('express')
const cors=require('cors')
const configureDB=require('./config/database')
const router=require('./config/routes')
const app=express()
const port=3025
app.use(express.json())
configureDB()


app.use(cors())
app.use(express.static('uploads'))
app.use('/',router)

  app.get('/',(req,res)=>{
    res.send('Welcome to the phonebook app')
})
//app.use();

app.listen(port,()=>{
    console.log('listening on port',port)
})