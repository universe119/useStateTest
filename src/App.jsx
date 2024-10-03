// hook: 리액트 16.4버전부터 새로나온 함수형 컴포넌트 사용할 수 있는
// hook : use로 함수 이름 시작 / 컴포넌트안에서만 호출 가능하고 특정 함수 안쪽에서는 호출 불가
// state : 해당 컴포넌트에 전용으로는 중요한 정보값이고 해당 정보값이 변경되면 컴포넌트는 재 호출 되며 화면 갱신되어 렌더링됨
//useState : state를 생성하거나 해당 state를 변경해서 컴포넌트를 재렌더링 시켜줄수 있는 state변경함수 반환
import { useState } from "react";

export default function App() {
  console.log("App render");
  let [Num, setNum] = useState(0) // 비구조할당으로 받음, 보통 일반적으로 프론트개발자들이 이런식으로 씀, 강사님 개인적으로 useState를 쓸때 변수 앞글자를 대문자를 씀

  const plusNum = () => {
    setNum(Num + 1);
    console.log(Num);
  };

  return (
    <>
      <h1>useState</h1>
      <h2>{Num}</h2>
      {/* 이벤트 핸들러 onClick */}
      <button onClick={plusNum}>plus</button>
      
    </>
  );
}