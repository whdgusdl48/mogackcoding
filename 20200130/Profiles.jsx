import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import Profile from './Profile';//정보들을 불러옵니다.

const Profiles = () =>{
    const activeStyle ={
        background : 'black',
        color : 'white',
    }
    console.log(Profile);//프로파일 컴포넌트가 나올겁니다.
    return(
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle}to="/profiles/mogackco">모각코 인원</NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact 
                render={() => <div>사용자를 선택해주세요 </div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
    //div태그 안에 사용자 목록을 일단 가져옵니다. 그럼 링크 태그를 통해 생성해줍니다. 라우트 태그를 통해서 초기 프로파일을 설정해주고 라우트를 파라미터 값으로 받게한다. 
};

export default Profiles;