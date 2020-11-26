//lógica por trás das rotas
//Função do controller é processar a requisição e mandar ou receber do banco de dados
//È o meio de campo entre o router e o banco de dados
import { Request, Response } from "express";
import { Link } from "../models/link";
import linksRepository from '../models/linksRepository'

// const links: Link[] = [];
// let proxId = 1   //tirei essa informação pois agora vamos usar o bd

//essa função gera de forma aleatória um codigo único para aquele novo link que estamos encurtando
function generateCode(){
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' //possibilidade de caracteres do link curto// usamos os mais simples pra não ficar dificil de compartilhar
    for(let i = 0; i < 5; i ++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length))
        return text
}
//vou pegar o text e concatenar com ele próprio pegando uma letra da lista de possibilidade -função chartArt na string a posição é aleatória, então uso a função Math uso o .floor que é a função de arrendondamento e dentro eu uso a função Math.random que gera um número aleatório de 0 a 1 * possible.lenght que é pra fazer girar entre o array de possibilidades qd terminar o for o text vai ser gerado , então eu uso ele no return 

async function postLink(req: Request, res: Response) {
    const link = req.body as Link; //recebe uma requisição via body do tipo link
    // link.id = proxId++; //qd chega o link no front ele não manda id então eu vou popular o id dentro dele incrementando com o proxId++ //não preciso mais pq o bd já é auto increment
    link.code = generateCode() //códigos gerados exclusivamente para ele
    link.hits = 0 //posso inicializar, já que a pessoa não vai me mandar isso
    //links.push(link) //salvar isso em um array substituo por uma chamada no bd
    const result = await linksRepository.add(link)
    if (!result.id) return res.sendStatus(400)
    link.id = result.id! //se vier um result.id eu criei com sucesso
    res.status(201).json(link); //criei e to te mandando de volta o link pro frontend
}
async function getLink(req: Request, res: Response) {
    const code = req.params.code as string // uso o as string para converter para o tipo certo - string
    const link = await linksRepository.findByCode(code)
  //const link = links.find(item => item.code === code) Mudando agora com o bd
  if(!link)
    res.sendStatus(404)
    else
    res.json(link)
}

async function hitLink(req: Request, res: Response) {
  const code = req.params.code as string
  const link = await linksRepository.hit(code)
  // const index = links.findIndex(item => item.code === code) //vou pegar o indice, a posição do array em que está o link //item cujo item.code seja igual a code

  if(!link) //Se o index for igual a -1 quer dizer que não encontrou
  res.sendStatus(404) //nesse caso dou o 404
  else{
      //links[index].hits!++ //senão eu vou incrementar o numero de hit naquele link //se vc tem certeza que não vai estar nulo, usa o hits!(o !força a aceitar)
      res.json(link) //devolve pro front o link na posição index
  }
}

export default {
  postLink,
  getLink,
  hitLink,
};
