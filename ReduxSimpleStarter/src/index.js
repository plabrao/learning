//Com o React se cria componentes
import React from 'react';

//o ReactDOM faz com que os componentes React interajam com o DOM
import ReactDOM from 'react-dom';

//imports de arquivos locais devem indicar o arquivo. Os imports acima importam módulos do node_modules
import SearchBar from './components/search_bar';

//vá também no console e instale a api google para buscar vídeos no youtube
//npm install --save youtube-api-search -> com o --save, ele instala e salva no package.json


// Api de busca do Youtube
import YTSearch from 'youtube-api-search';


//eu tive que ir em console.developers.google.com, ativar a API 
// Youtube Data Api V3. Tive também que criar um projeto Google para isto.
//Depois criar uma credencial do tipo 'API Key'. 
//O Código gerado por ela foi AIzaSyBxZAJhGNz6Ucea2XEaOVAVAhaKQVwVwKg
//Sem a credencial a Google não permite utilizar a API dela

const API_KEY = 'AIzaSyBxZAJhGNz6Ucea2XEaOVAVAhaKQVwVwKg'; 

YTSearch({key:API_KEY, term:'Jesus'}, function(data) {
    console.log(data);
});


//Cria um novo componente. Este componente produz HTML
// const App = function() {
//     return <div>Hi!</div>; 
// }


const App =() => { //este código é igual ao function(). É o lambda do ES6
    return ( //para JSX com múltiplas linhas, é obrigatório ()

        //Isto no fim vira React.createElement. Por isto, que todo arquivo precisa
        //ter a importação de react  
        <div>
            <SearchBar/>    
        </div>
    );  
};

//Coloca HTML gerado pelo componente criado no DOM
//App é uma classe de um componente. em JSX o <App/> é uma instância de um componente
//O segundo argumento identifica onde colocar este componente no DOM (elemento com a classe 'container')
ReactDOM.render(<App/>, document.querySelector('.container')); 


//Regra: Sempre crie somente um componente React por arquivo