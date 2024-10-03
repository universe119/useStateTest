// hook: 리액트 16.4버전부터 새로나온 함수형 컴포넌트 사용할 수 있는
// hook : use로 함수 이름 시작 / 컴포넌트안에서만 호출 가능하고 특정 함수 안쪽에서는 호출 불가
// state : 해당 컴포넌트에 전용으로는 중요한 정보값이고 해당 정보값이 변경되면 컴포넌트는 재 호출 되며 화면 갱신되어 렌더링됨
//useState : state를 생성하거나 해당 state를 변경해서 컴포넌트를 재렌더링 시켜줄수 있는 state변경함수 반환
import { useState } from "react";

// 불변성 immutable : 값이 훼손되지 않는, 불변한
// 리액트는 기본적으로 원본, 변경될 자료가 모두 있어야됨
// 참조형 자료를 그냥 다른 변수에 옮겨 담는것은 힙메모리에 있는 값 자체를 복사하는 것이 아닌 해당 값의 참조값만 복사가 됨 (얕은복사 Shallow Copy)
// 얕은 복사가 된 참조형 자료를 변경하면 원본의 훼손이 일어나면서 불변성이 유지가 안됨
// 리액트입장에서 불변성이 깨지면 비교할 대상이 없어진다는 의미이므로 화면 재랜더링 자체가 안됨
// -- 전개연산자를 통한 원본 참조형 자료를 완전 복사 후 완전복사된 값을 변경해서 state변경함수 처리

export default function App() {
	//컴포넌트 함수의 일반 지역변수를 변경하는 것으로는 새로운 JSX를 반환하는 컴포넌트 함수 자체를 재호출 불가
	//단지 이벤트가 발생할때마다 컴포넌트 안쪽의 핸들러 함수인 plusNum만 재호출 됨
	console.log("App render");
	const [Colors, setColors] = useState(["red", "green", "blue"]); // 배열값이 담긴
	// const [State, State변경함수] = useState(초기값)
	// let [Num, setNum] = useState(0); // 원시형자료

	const changeColors = () => {
		const newColors = [...Colors]; // 기존의 참조값만 복사하는 것이 값 자체를 완전복사(원본 유지됨)
		newColors[0] = "hotpink";
		console.log(newColors);
		console.log(Colors);

		setColors(newColors);

		//state변경함수를 통해서 값을 변경해야지만
		//리액트는 변경점을 인식해서 컴포넌트를 재호출
		// setNum(Num + 1);
	};
	return (
		<>
			<h1>useState</h1>

			{/* <h2>{Num}</h2> */}

			<button onClick={changeColors}>Change</button>
			<ul>
				{Colors.map((data, idx) => (
					<li key={idx} style={{ color: data }}>
						{data}
					</li>
				))}
			</ul>
		</>
	);
}
