import React ,{memo}from 'react';
import Td from './td';

const Tr = memo(({rowData,rowIndex,dispatch}) => {
  return(
    <tr>
     {Array(rowData.length).fill().map((td,i) => (//3만큼
       <Td dispatch={dispatch} cellIndex={i} rowIndex={rowIndex} cellData={rowData[i]}/>))}
    </tr>
  );
});

export default Tr;
