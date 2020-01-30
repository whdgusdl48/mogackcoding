import React from 'react';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import {Route,Link} from 'react-router-dom';

const App2 = () => {
    return(

        <div>
            <ul>
                <li>
                  <Link to="/" >홈으로</Link>
                </li>

                <li>
                  <Link to="/about">정보</Link>
                </li>
                <li>
                  <Link to="/profiles">똥쟁이정보들</Link>
                </li>
                <li>
                  <Link to="/history">홈페이지 예제</Link>
                </li>

            </ul>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path='/profiles' component={Profiles} />
            <Route path='/history' component={HistorySample} />
        </div>
    )
}

export default App2;