import express from "express"
import mongoose from "mongoose"

import "dotenv/config"

const app = express();

const port = process.env.PORT ||  3000
app.listen(PORT)