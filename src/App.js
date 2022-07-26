import  {Component} from "react"
import Question from './Question'
import logo from './img/logo.png'
import './App.css';

class App extends Component{
  state={
    question: "What is the Capital of India??",
    answer: "Delhi is the capital of India"
  }

  revealAnswerHandler = (event)=>{
      this.setState({question: this.state.answer})
  };

  render(){
    return(
      <div className="App">
        <header className="App-Header">
          <img src={logo} className="App-logo " alt="logo" />
          <h1>30 Days Of React Challange</h1>
          <h2>Day 1  / Question and Answer App</h2>
          <h2>To reveal Answer Click On the Question</h2>
        </header>
        <Question 
        question={this.state.question}
        click={this.revealAnswerHandler}
        />
      </div>

    );
  }
  
}

export default App;
