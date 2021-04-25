import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState([]);
  //a에는 남자코트추천이라는 데이터가 들어가있고 b에는 남자코트추천데이터를 변경할수있는 함수가 들어가있다
  //useState 데이터를 특별하게 담는공간
  //state에 데이터를 저장해놓은 이유 state는 변경되면 html이 자동으로 재 랜더링이 되기때문이다
  let [modal, modal변경] = useState(false);
  let [누른제목,누른제목변경] =useState(0)
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

      {글제목.map(function (글 ,i) {
        return (
          <div className="list">
            <h3 onClick={()=>{누른제목변경(i)}}>
              {글}{' '}
              <span
                onClick={() => {
                  좋아요변경(좋아요++);
                }}
              >
                👍
              </span>
              {좋아요}
            </h3>
            <p>5월 발행</p>
            <hr />
          </div>
        );
      })}
    
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달창 열기
      </button>
      {modal === true ? <Modal 성남={글제목} 서울={누른제목}/> : null}
    </div>
  );
}
function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.성남[props.서울]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
