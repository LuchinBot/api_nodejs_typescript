import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user'

export const register = async (req: Request, res: Response) => {
  const { name, lastname, email, password, avatar } = req.body
  // Genero un hash para el password
  const passwordHash = await bcrypt.hash(password, 10)

  // Creo el usuario
  User.create({
    name: name,
    lastname: lastname,
    email: email,
    password: passwordHash,
    avatar: avatar,
    status: 1
  })

  // Devuelvo el usuario creado
  res.json({
    msg: 'Usuario creado correctamente.'
  })
}
