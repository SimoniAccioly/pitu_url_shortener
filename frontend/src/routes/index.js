//controla o roteamento da aplicação

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//function Routes é Responsável por retornar uma instância do browser router contendo um swuitch e dentro do switch contendo todas as rotas navegáveis dentro da aplicação

//rotas:
//pitu.tk/ -> HomePage
//pitu.tk/:code -> RedirectPage //O: depois do Route é o parâmetro e o parâmetro é denominado code
//pitu.tk/:code/stats -> StatsPage

import HomePage from '../pages/HomePage'
import RedirectPage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoundPage from '../pages/NotFoundPage'

function Routes(){ 
    return(
        <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/:code" component={RedirectPage}/>
            <Route exact path="/:code/stats" component={StatsPage}/>
            <Route exact path="/*" component={NotFoundPage}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
//qd o cliente acessar a / ele vai renderizar o componente Homepage para o usuário e assim as outras rotas definidas tb
//exact para não confundir as rotas, apenas qd o usuário passar exatamente a rota definida

// /* qualquer coisa diferente do que estiver na rota ele cai no not found