import React,{memo,useEffect,useRef,useCallback} from 'react';
import {CLICK_CELL,SET_TURN} from './tictacto';

const Td = memo(({rowIndex,cellIndex,dispatch,cellData}) => {
  console.log('td render');
  const onClickTd = useCallback(()=>{
    console.log(rowIndex,cellIndex);
    if(cellData){
      return;
    }//값 상태 변경 금지시킨다. 이미 값이 있으면 retrun값을 아무것도 없게한다.
    dispatch({type:CLICK_CELL,row:rowIndex,cell:cellIndex,},[]);.//
  },[cellData]);
  return(
    <>
     <td onClick={onClickTd}>{cellData}</td>
    </>
  );
});

export default Td;
