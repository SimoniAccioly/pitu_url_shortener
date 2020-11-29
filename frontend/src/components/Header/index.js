import React from 'react'
import {Logo, HeaderContainer} from './styless'

import Icone from '../../assets/íconefofo.jpg'

function Header(props) {
    return (
        <>
       <HeaderContainer>
           <Logo src={Icone} alt= 'Pitu - Encurtador de URL'/>
           <h1>Pitu</h1>
           <p>{props.children}</p>
       </HeaderContainer>
        </>
    )
}
export default Header