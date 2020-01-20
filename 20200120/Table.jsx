import React, { useMemo } from 'react';
import Tr from './Tr';

const Table = ({ tableData, dispatch }) => {//상위 tictactoe에 있는 props를 가져온다 여기에는 tableDATA를 dispatch를 가져온다.
  console.log(tableData.length);//3을 가리키게 된다.
  return (
    <table>//테이블로 감싼다.
      {Array(tableData.length).fill().map((tr, i) => (//배열로 채운다3만큼 map을통해서 부모로부터 가져온다.
        useMemo(
          () => <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />//tr 컴포넌트에 값을 전달 rowIndex는 i값,
          [tableData[i]],//변하는 변수
        )
      ))}
    </table>
  );
};

export default Table;
