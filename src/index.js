

import connetDB from "./db/index.js"
import dotevn from "dotenv"


dotevn.config({
    path: './env'
})

connetDB()  







