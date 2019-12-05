import React from 'react';



class Produto extends React.Component {
    constructor(props) {
       super(props)  
    }
    
    render() {
        return(
            <div>
                <img></img>
                <p>Nome</p>
                <p>Preço</p>
            </div>
        )
    }
}

export default Produto;