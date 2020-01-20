import React,{memo,useEffect,useReducer,useCallback} from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};//초기 상태를 설정하는 변수 즉 다시말해서 여기가 state라고 생각하자.
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';
export const RESET_GAME = 'RESET_GAME'; //action 타입을 정의하는 변수들이라고 생각하자.
const reducer = (state,action) => {//reducer 정의 매개변수는 상태, 액션이라고 하자 조건문을 통해 이벤트로 준 액션에 해당하는
  switch(action.type){
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,//지금까지의 상태를 저장한다.
        winner: action.winner,//액션의 winner로 정의한다.
      };
    case CLICK_CELL:{
      const tableData = [...state.tableData];//state의 테이블 데이터를 가져옴
      tableData[action.row] = [...tableData[action.row]];//얕은복사
      tableData[action.row][action.cell] = state.turn;//turn 저장
      return{
        ...state,//상태저장
        tableData,//tableData를 가져온다.
        recentCell : [action.row,action.cell],
      };
    }
    case SET_TURN:
      return{
        ...state,
        turn:state.turn === 'O' ? 'X' : 'O',
      }
    case RESET_GAME:
      return{
        ...state,
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      }
  }
};

const TicTacToe = () => {
  const [state,dispatch] = useReducer(reducer,initialState); //초기상태와 reducer를 가진 변수를 설정
  const {winner,tableData,turn,recentCell} = state;
  // const [winner,setWinner] = useState('');
  // const [turn,setTurn] = useState('0');
  // const [tableData,setTableData] = useState([['','',''],['','',''],['','','']]);

  const onClickTable = useCallback(() => {
    dispatch({type:'SET_WINNER',winner:'O'});
  },[]);

  useEffect(()=>{
    let win = false;
    const [row,cell] = recentCell;
    if(row < 0){
      return ;
    }
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
     win = true;
   }
   if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
     win = true;
   }
   if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
     win = true;
   }
   if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
     win = true;
   }
   console.log(win,row,cell,tableData,turn);
   if(win){
     dispatch({type:SET_WINNER,winner:turn});
     dispatch({type:RESET_GAME});
   }
   else{
     let all = true;
     tableData.forEach((row)=>{
       row.forEach((cell)=>{
         if(!cell){
           all = false;
         }
       });
     });
     if(all){
       dispatch({type:RESET_GAME});
     }else{
       dispatch({type:SET_TURN});
     }
   }

  },[recentCell]);
  return(
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
}

export default TicTacToe;
