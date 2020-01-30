import React from 'react'; //리액트 모듈을 불러옵니다.

//현재 데이터는 객체 오브젝트 형태로 구현되어있습니다.

const Profile = ({match}) => { //이 hooks 자체에서 match가 뭐냐 이 라우터 자체의 객체죠
    console.log(match);//여기서 파라미터의 값, url값을 가져옵니다.
    const data = {
        velopert : {
            name : '김충환',
            des : '지각쟁이'
        },
        mogackco : {
            name : '정현수',
            des : '똥코새키'
        },
        aaaa : {
            name : '나',
            des : 'asdf'
        }
    };
    const {username} = match.params;//즉 여기서 match.params하면은 data안에 있는 velopert,mogackco 이 두개가 된다.
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는사람입니다.</div> 
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>
                {profile.des}
            </p>
        </div>
    )
}

export default Profile;