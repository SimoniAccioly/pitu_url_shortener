//Toda a manipulação de links do banco de dados passa por aqui

import linkModel, {ILinkModel} from './linkModel'
import {Link} from './link'

function findByCode (code:string){  //encontrar por código
    return linkModel.findOne<ILinkModel>({where: { code }}) //aqui rola o promisse, o node faz o findOnde, que é uma operação considerada demorada, que é a promessa de que ele vai te trazer os dados
}

function add (link: Link){ //salvar
    return linkModel.create<ILinkModel>(link)
}

async function hit (code: string){ //Pega o link do banco de dados e depois atualiza o hits dele
    const link = await findByCode(code) //Carregar o link que foi passado //função await ele vai esperar o retorno da função anterior //quando uso o await preciso usar antes de function o async, pra informar que ela está usando o await propositalmente nesta função
    if(!link) return null //Se não veio o link retorna null
    //caso contrário:
    link.hits!++ //incrementando os hits
    await link.save()//banco de dados salvar a atualização //o .save faz o update
    return link //salvamento assincrono, então passo o await
}

export default {
    findByCode,
    add,
    hit
}