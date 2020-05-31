import React , {Component} from 'react'
import Score from './Score';
class Game extends Component{
  constructor(props){
    super(props);
let valuelist=this.createQuestion();    
this.state={
value1:valuelist[0],
value2:valuelist[1],
value3:valuelist[2],
numQuestions:0,
numCorrect:0,
proposedAnswer : valuelist[3]
}
}

createQuestion(){
let value1=Math.floor(Math.random() * 100);
let value2=Math.floor(Math.random() * 100);
let value3=Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
let valuelist=[value1,value2,value3,proposedAnswer];
return valuelist;
}
  
setNewQuestion=()=>{
  let value1=Math.floor(Math.random() * 100);
let value2=Math.floor(Math.random() * 100);
let value3=Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  this.setState({
  value1:value1,
  value2:value2,
  value3:value3,
  proposedAnswer:proposedAnswer  
  });
}  
changeScore=(correct)=>{
if(correct){
this.setState(prevState=>({
numQuestions:prevState.numQuestions+1,
numCorrect:prevState.numCorrect+1
}))
}
  else{
    this.setState(prevState=>({
numQuestions:prevState.numQuestions+1,
}))
  }
}

evaluateAnswer=(event)=>{
if(this.state.value1+this.state.value2+this.state.value3==this.state.proposedAnswer && event.target.name=='true'){
  this.changeScore(true);
  this.setNewQuestion()
}
else if(this.state.value1+this.state.value2+this.state.value3!=this.state.proposedAnswer && event.target.name=='false'){
  this.changeScore(true);
  this.setNewQuestion();
}
else{
this.changeScore(false);
  this.setNewQuestion();
}
}
render(){
    return(
    <div>
      <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button name='true' onClick={(event)=>{this.evaluateAnswer(event)}}>True</button>
          <button name='false' onClick={(event)=>{this.evaluateAnswer(event)}}>False</button>
</div>
<Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
</div>
)
}
}

export default Game;