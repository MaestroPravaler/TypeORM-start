import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserActive } from "./entity/UserActive"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User, UserActive],
    migrations: [],
    subscribers: [],
})
