import { DataTypes } from 'sequelize'
import sequelize from '../database/connection'

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.INTEGER
  }
})
