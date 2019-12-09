import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    width: 200px;
    border: 1px solid black;
    margin: 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-size: 15px;
`
const Button = styled.button`
    width: 200px
`

const Img = styled.img`
    width: 200px;
    height: 150px;
`

function Produto (props) {
    return(
        <Div id={props.id}>
            <Img src={props.imagem}></Img>
            <span>{props.nome}</span><br/>
            <span>{"R$"}{props.preco}{",00"}</span>
            <Button onClick={(ev)=>{
                props.passarId( Number(ev.target.parentNode.id))
            }}>Adicionar ao Carrinho</Button>
        </Div>
    )
    
}

export default Produto;