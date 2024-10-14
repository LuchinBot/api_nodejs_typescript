import express, { Application } from 'express'
import sequelize from '../database/connection'
// Models
import { User } from '../models/user'
// Routes
import Ruser from '../routes/user'

class Server {
  private app: Application
  private port: string
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    this.listen()
    this.midlewares()
    this.router()
    this.DBconnect()
  }
  router() {
    this.app.use(Ruser)
  }

  midlewares() {
    this.app.use(express.json())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto http://localhost:${this.port}`
      )
    })
  }

  async DBconnect() {
    try {
      // await sequelize.authenticate()
      await User.sync({ force: true, alter: true })
      console.log('Conectado a la base de datos')
    } catch (error) {
      console.log(error)
    }
  }
}

export default Server
