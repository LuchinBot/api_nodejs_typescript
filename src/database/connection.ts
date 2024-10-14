import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('db_assistence', 'node', '070121', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
