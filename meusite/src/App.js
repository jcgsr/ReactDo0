/* Curso iniciado em 10.05.2020 */

import React, { Component } from 'react';
import Membro from './components/Membro/Membro';
import Feed from './components/Membro/Feed';

/*
###### 1º Exemplo de Stateless Components ↓↓

const Bemvindo = (props) => { // obs.: props são estáticas

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
###### 2º Exemplo de Stateless Components ↓↓

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

/* 
###### Class Component

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
*/

/*
######
class App extends Component { // obs.: state são dinâmicas

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Jovane',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }

  aumentar(){
    let state = this.state;
    state.nome = 'Ciso';
    state.contador += 1;
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    )
  }
}

*/

/*
###### Ciclo de vida Componentes

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
     }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentDidUpdate(){
    console.log('Atualizou!');
  }

  render(){
    return(
      <div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>
    )
  }
}
*/


/*
###### Components Separados em Arquivos diferentes

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: false
    };
    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
  }

  sair(){
    this.setState({status: false})
  }

  entrar(){
    this.setState({status: true})
  }
  render() {
    return (
      <div>
        {this.state.status ?
        <div>
          <h2>Bem-vindo ao Sistema!</h2>
          <button onClick={this.sair}>Sair</button>
          </div> :
          <div>
            <h2>Olá visitante, faça o login!</h2>
            <button onClick={this.entrar}>Entrar no sistema</button>
          </div>
        }

        <div>
          <h2>Curso ReactJS</h2>
        </div>
      </div>
    )
  }
}
*/

/* 
###### Listas

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Jovane", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Susi", curtidas: 120, comentarios: 24 },
        { id: 3, username: "Diana", curtidas: 30, comentarios: 14 },
        { id: 3, username: "Ciso", curtidas: 1, comentarios: 0 }
      ]
    }
  };
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed id={item.id} username={item.username}
            curtidas={item.curtidas} comentarios={item.comentarios}/>
          )
        })}
      </div>
    );
  }
}
*/

/* 
###### Formulário I

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }

  trocaEmail(e) {
    let valorDigitado = e.target.value;
    this.setState({ email: valorDigitado });
  }

  trocaSexo(e){
    this.setState({sexo: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail} /> <br />
        Senha:
        <input type="password" name="senha" value={this.state.senha}
          onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>

        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>

      </div>
    )
  }
}
*/

/*

###### Formulário II

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e){
    const {nome, email, senha} = this.state;

    if (nome !== '' && email !== '' && senha !== '') {
      alert(`Cadastrado com sucesso: \nNome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)

    } else {
      this.setState({error: "Algo está faltando."})
    }

    e.preventDefault();

  }

  render() {
    return (
      <div>
        <h1>Novo Usuário</h1>

        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.cadastrar}>
          <label>Nome</label>
          <input type="text" value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
          <label>Email</label>
          <input type="email" value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} /> <br />
          <label>Senha</label>
          <input type="password" value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })} /> <br />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}
*/

// Formulário III - refatorando qnt de states e functions

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: '', 
        email: '',
        senha: '',
        sexo: 'masculino'
      }
    }

    this.dadosForm = this.dadosForm.bind(this)

  }

  dadosForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} /> <br />
        Email:
        <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm} /> <br />
        Senha:
        <input type="password" name="senha" value={this.state.form.senha}
          onChange={this.dadosForm} /> <br />
        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>

        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>

      </div>
    )
  }
}

export default App;
