import express, { Application, Request, Response } from "express"
import { dataSource } from "./config/ormconfig"
import { errorHandle } from "./middlewares/errorHandle"
import routes from "./routes/routes"

const app: Application = express()

dataSource.initialize()
.then(() => console.log("connected")).catch(err => console.log(err))


app.use(express.json())
app.use(routes)
app.use(errorHandle)

app.use("/*", (_: Request, res: Response) => res.sendStatus(404))

app.listen(9090, () => console.log(9090))