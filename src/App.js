import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);
  //a에는 남자코트추천이라는 데이터가 들어가있고 b에는 남자코트추천데이터를 변경할수있는 함수가 들어가있다
  //useState 데이터를 특별하게 담는공간
  //state에 데이터를 저장해놓은 이유 state는 변경되면 html이 자동으로 재 랜더링이 되기때문이다
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  // deep copy ... 서로 독립적인 값을 가지는 복사 복사했던 중가로가 제거가 되고 새로운 중가로를 생성한다
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              좋아요변경(좋아요++);
            }}
          >
            👍
          </span>{' '}
          {좋아요}{' '}
        </h3>
        {/* 온클릭에는 클릭될때 실행할 함수 or 그안에서 arrow function으로 직접만들수도잇음 */}
        <p>4월 발행</p>
        <button onClick={제목바꾸기}>버튼</button>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 발행</p>

        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>5월 발행 </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
