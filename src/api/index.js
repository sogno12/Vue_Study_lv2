/* Api - index.js */

import axios from 'axios';

const config = {
    // jsonplaceholder 제공하는 랜덤 user 정보를 얻을 수 있는 사이트
    baseUrl : "https://jsonplaceholder.typicode.com/users",
}; 

function $getUser(num) {
    // 입력된 num로 유저 정보를 가져옴
    console.log("num:" +num);
    return axios.get(`${config.baseUrl}/${num}`);
}

export { // 외부에서 함수를 사용할 수 있도록 export 해줌
    $getUser,
}