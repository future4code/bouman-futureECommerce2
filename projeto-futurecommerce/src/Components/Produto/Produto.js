import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    width: 200px;
    border: 1px solid black;
    margin: 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
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
            <p>{props.nome}</p>
            <p>{"R$"}{props.preco}{",00"}</p>
            <Button>Adicionar ao Carrinho</Button>
        </Div>
    )
    
}

export default Produto;