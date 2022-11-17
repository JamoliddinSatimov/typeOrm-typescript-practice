import { DataSource } from "typeorm"
import path from "path"


export const dataSource = new DataSource({
    type:"postgres",
    port:5432,
    host:"localhost",
    username:"postgres",
    password:"123456",
    database:"n26",
    synchronize:true,
    entities: [path.join(__dirname, "..", "entities", "*.entity.{ts,js}")]
})