import React,{Component} from 'react';

class ResponseCheck extends Component{

  state = {
    state : 'wait',
    mes : '클릭해서 시작',
    result : [],
  }
  timeout;
  startTime;
  endTime;
  a = () =>{
    const {state,result,mes} = this.state;
    if(state === 'wait'){
      this.setState({
        state : 'ready',
        mes : '초록색일때 클릭해주세요!'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state : 'now',
          mes : '지금클릭',
        });
        this.startTime = new Date();
      },Math.floor(Math.random()*1000)+2000);
    }
    else if(state === 'ready'){
      clearTimeout(this.timeout);
      this.setState({
        state : 'wait',
        mes : '너무빨리 눌렀습니다.'
      });
    }
    else if(state === 'now'){
      this.endTime = new Date();
      this.setState((prevState) => {
        return({
        state : 'wait',
        mes : '클릭해서 시작',
        result : [...prevState,this.endTime - this.startTime],
      });
    });

    }
  }
  render(){
    const {state,mes,result} = this.state;
    return(
      <>
      <div
      id="screen"
      className={state}
      onClick={this.a}>
      {this.state.mes}
      </div>
      {result.length ===0 ?
      null :
      <div> 평균시간 : {result.reduce((a,c) => a+c) / result.length}ms </div>}
      </>
    );
  }
}

export default ResponseCheck;
