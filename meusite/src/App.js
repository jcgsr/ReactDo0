/* Curso iniciado em 10.05.2020 */

import React, { Component } from 'react';

/*
1º Exemplo de Stateless Components ↓↓

const Bemvindo = (props) => { 

  return (
    <div>
      <h2>Bem-vindo(a), {props.nome}!</h2>
      <h3>Tenho {props.idade} anos.</h3>
    </div>
  )
}


function App() {
  return (
      <div>
        Olá, Mundo React!
        <Bemvindo nome="Jovane" idade='39'/>
        <Bemvindo nome="Susi" idade='36'/>
        <Bemvindo nome="Diana" idade='2'/>
        <h1>Curso React</h1>
      </div>
    );      
}
*/

/*
2º Exemplo de Stateless Components ↓↓

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook} tw={props.twitter}/>
    <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, eu sou {props.nome}.</h2>
      <h2>Cargo: {props.cargo}.</h2>
      <h2>Idade: {props.idade} anos.</h2>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a href={props.tw}>Twitter </a>
      <a>Linkedin </a>
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Jovane" cargo="Programador" idade="39" twitter="https://twitter.com/home"/>
      <Equipe nome="Susi" cargo="Massoterapeuta" idade="36" facebook="https://www.facebook.com/"/>
      <Equipe nome="Diana" cargo="Boneca" idade="2"/>
    </div>
  )
}
*/

// Class Component

class Equipe extends Component {
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} 
        idade={this.props.idade}/>
        <Social />
        <hr/>
      </div>
    )
  }
}

class Sobre extends Component {
  render(){
    return(
      <div>
        <h2>Olá, eu sou {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    )
  }
}

const Social = () => {
  return (
    <div>
      <a>Facebook </a>
      <a>Twitter </a>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Conheça nossa Equipe:</h1>
      <Equipe nome="Jovane" cargo="Programador" idade="39"/>
      <Equipe nome="Susi" cargo="Massotetapeuta" idade="36"/>
    </div>
  )
}

export default App;
