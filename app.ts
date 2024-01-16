import express from 'express'
import postRouter from './routes/postRoute.ts'
import userRouter from './routes/userRoute.ts'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
const PORT = 8080

app.use(express.static('.'))
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/", postRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log("Listening to localhost:" + PORT)
})
