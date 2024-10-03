// hook: 리액트 16.4버전부터 새로나온 함수형 컴포넌트 사용할 수 있는
// hook : use로 함수 이름 시작 / 컴포넌트안에서만 호출 가능하고 특정 함수 안쪽에서는 호출 불가
// state : 해당 컴포넌트에 전용으로는 중요한 정보값이고 해당 정보값이 변경되면 컴포넌트는 재 호출 되며 화면 갱신되어 렌더링됨
//useState : state를 생성하거나 해당 state를 변경해서 컴포넌트를 재렌더링 시켜줄수 있는 state변경함수 반환

export default function App() {
  console.log("App render");
  let num = 0; // num은 재호출이 안돼서 h2에 표기가 안됨.

  const plusNum = () => {
    num++;
    console.log(num);
    
  };

  return (
    <>
      <h1>useState</h1>
      <h2>{num}</h2>
      {/* 이벤트 핸들러 onClick */}
      <button onClick={plusNum}>plus</button>
    </>
  );
}