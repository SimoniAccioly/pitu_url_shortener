//Aqui fica a conexão básica do banco de dados
import {Sequelize} from 'sequelize'

//String de conexão - é uma string que tem todas as configurações para o sequelize conectar oao nosso banco de dados


const sequelize = new Sequelize (`mysql://root:123#senha@localhost:3306/pitu`)
//mysql://root(administrador):senhaMYSQL@localdoBD:Porta/nomedobd

export default sequelize