// requerir módulos 
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


//  Incializaciones 
const app = express()
dotenv.config()


// Configuraciones
app.set('port', process.env.PORT || 3000)
app.use(cors())

// Middleware
app.use(express.json())


// Rutas
app.get('/',(req,res)=>{
    res.send("Sever on")
})


// Exportar la instancia de express
export default app





