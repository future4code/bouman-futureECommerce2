import React from 'react';
import './App.css';
import Produto from './Components/Produto/Produto'
import styled from 'styled-components'

const Section = styled.section`
  display:flex;
  flex-wrap:wrap;
`

const lista = [
  {
    id: 0 ,
    nome: "Volta ao Mundo (econômico) " ,
    preco: 600000 ,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTheQf9smyScfjXqT49EwUnSfQrq_t1JOrJzN8lgFuyh3isGss3"
  } ,
  {
    id: 1 ,
    nome: "Passeio na Lua (econômico) " ,
    preco: 1000000 ,
    imagem: "https://cdn.pixabay.com/photo/2012/10/10/10/36/moon-landing-60582_960_720.jpg"
  } ,
  {
    id: 2 ,
    nome: " Pacote - Anéis de Saturno " ,
    preco: 5000000 ,
    imagem: "https://scitechdaily.com/images/Cassini-Spacecraft-Saturn-Rings.jpg"
  } ,
  {
    id: 3 ,
    nome: " Pacote - Sistema Estelar de Sirius " ,
    preco: 12000000 ,
    imagem: "https://www.cloudynights.com/uploads/gallery/album_7819/gallery_125132_7819_1686009.jpg"
  } ,
  {
    id: 4 ,
    nome: " Pacote - Nebulosa de Carina " ,
    preco: 27000000 ,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnN33Ro0rZ4moLpVfNg1rF6T3S7ax3z1ngvjrIs88pnOYYXja0"
  } ,
  {
    id: 5 ,
    nome: "Pacote -" ,
    preco: 46000000 ,
    imagem: "https://miro.medium.com/max/900/1*Mdps-D92jHID_3bFnlyogg.jpeg"
  } ,
  {
    id: 6 ,
    nome: " Pacote - Universo" ,
    preco: 120000000 ,
    imagem: "https://miro.medium.com/max/1280/1*uHA4YgUl1EwaEDLtJQ7_3g.jpeg"
  } 
]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      ordemCrescente: true , 
      quantidade: [0,0,0,0,0,0,0] ,
      filtrosMax: Infinity ,
      filtrosMin: 0 ,
      filtroNome: ''
    }
  }

  render () {

  
    return (
      <div className="App">
        <section>      
          <fieldset>

            <legend>
              <h2>Filtros</h2>
            </legend>
            <input type="number" placeholder="Valor mínimo:"></input><br/>
            <input type="number" placeholder="Valor máximo:"></input><br/>
            <input type="number" placeholder="Buscar produto:"></input><br/>
            {"Exibir em ordem:"}<br/>
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>

          </fieldset>
          <div>
            <h2>Carrinho:</h2>
            {"item: "}
            {" 0 "}
            {" (remover)"}<br/>
            {"soma:0"}
          </div>
        </section>
        <Section>
          {lista.map((produto)=>
            <Produto 
              id={produto.id}
              imagem={produto.imagem}
              preco={produto.preco}
              nome={produto.nome}
            />
          )}    
        </Section>
      </div>
    );
  }
}

export default App;
