import express from "express";
import linksRouter from './routes/links'
import cors from 'cors'

const app = express();
app.use(express.json()); //usando o formato json de dados
app.use(cors()) // para permitir o acesso entre o front e o backend
app.use(linksRouter)

export default app;