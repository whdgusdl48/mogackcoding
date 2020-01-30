import React,{memo} from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return(
        <div className ="TodoTemplate">
            <div className ="app-title">할일 일정</div>
            <div className ="content">{children}</div>
        </div>
    );
}

export default memo(TodoTemplate);