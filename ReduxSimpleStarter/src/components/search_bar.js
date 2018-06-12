import React, {Component} from 'react';

//{Component} é igual a fazer const Component = React.Component;

//Componente definido como uma função
// const SearchBar = () => {
//     return <input/>; 
// };

//Componente definido como uma classe
//class SearchBar extends React.Component { também é válido
class SearchBar extends Component { //só é possível porque importou o Component do React diretamente no import

    //Somente Componentes baseados em classes possuem state. Function components não possuem    
    constructor(props) {
        super(props);

        this.state = {term:''}; //term é o atributo que guardará o termo de busca
    }

    /*
    Todo componente em forma de classe em React deve possuir a implementação do método render
    */
    render() {
        //return <input onChange={this.onInputChange}/>; // o {} é importante
        //ou fazer como uma arrow function
        //return <input onChange={(event) => console.log(event.target.value)}/>;

        //se na arrow functions (lambda) somente existir um parâmetro não precisa de ()
        //Ao alterar o valor, o evento está alterando o atributo term do state para o valor digitado
        return (
            <div>
                
                {/* <input onChange={event => this.setState({term: event.target.value})}/>
                Value of the Input: {this.state.term} */}

                {/* Se eu seto value igual a this.state.term, o input vira um controlled
                form element. A partir disto, a única maneira de alterar o valor do input
                é alterando o this.state.term  
                
                Se tirar o onChange o input não funciona, pois ele sempre volta o value para ''
                */}
                <input 
                    onChange={event => this.setState({term: event.target.value})}
                    value={this.state.term} 
                />

            </div>
        
        );

        //Sempre manipule o state a partir de this.setState. Nunca faça this.state.term = event.target.value;

        //Sempre que o state é modificado o React renderiza denovo o componente

    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}


//com isto, qualquer arquivo que importar este arquivo, importará por default a class SearchBar
export default SearchBar;