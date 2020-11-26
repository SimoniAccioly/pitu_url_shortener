//Aqui fica a tabela do banco de dados
import Sequelize, {Optional, Model} from "sequelize";
import { Link } from "./link"; //Vou fazer o Sequelize respeitar as mesmas regras do TypeScript
import database from "../database";

//Codificação para usar o Link do TupeScript
interface ILinkCreationAttributes extends Optional<Link,"id">{} //Qd criar o link o Id é opcional

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link{} //regras do link e do model
//È uma validação que não deixa criar uma coisa no bd de outra no projeto

//define, cria a definição da tabela
//primeiro parametro é o nome da entidade e o sdegundo parametro é o Schema da tabela
const LinkModel = database.define<ILinkModel>("link", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED, //inteiro positivo, somente (0 em diante)
    primaryKey: true, //chave primária, identificados unico
    autoIncrement: true,
    allowNull: false, //não permite nulo
  },
  url: {
    type: Sequelize.STRING(255), //Tipo da url //tamanho máximo (passo se quiser)
    allowNull: false,
  },
  code: {
    //code- versão curta da tabela
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false,
  },
  hits: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0, //Se vc não mandar ele, ele assume 0 como padrão
  },
});

export default LinkModel;
