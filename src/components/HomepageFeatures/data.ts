export const RecommendedArticleList = [
	{
		to: "docs/category/소그룹",
		title: "소그룹 앱 개발일지",
		image: "/img/sogroup_icon.png",
		description: "소그룹 앱의 개발과 출시, 개선 과정을 기록합니다.",
	},
	{
		to: "docs/node_js/bundler/webpack/css_order_issue",
		title: "Deep dive into webpack CSS order issue",
		image: "/img/css_order_issue.png",
		description:
			"많은 사람들이 Webpack에서 CSS의 순서가 예상과 다르게 동작해 스타일이 올바르게 적용되지 않는 문제를 겪고 있다고 보고합니다. 사실 Webpack에서 CSS의 순서는 splitChunks 설정과 관련이 있으며, 매우 불안정합니다. 예를 들어, JS 모듈이 a.css를 먼저 import한 후 b.css를 import하더라도, splitChunks를 설정하면 최종적으로 a와 b의 순서가 import 순서와 완전히 다를 수 있습니다.",
	},
	{
		to: "docs/category/swiftui",
		title: "SwiftUI",
		image: "/img/swiftui.png",
		description:
			"@State는 변화가 생기면 해당 변수의 값을 읽거나 새로 쓸 수 있음을 의미하는 property wrapper이다.",
	},
	{
		to: "docs/category/react-native-optimization",
		title: "React Native Optimization",
		image: "/img/think_twice_before_you_pick_an_external_library.png",
		description:
			"최적화되지 않은 라이브러리는 배터리 소모와 앱을 느리게 만들 수 있습니다.",
	},
	{
		to: "docs/node_js/engine/v8_engine",
		title: "JS V8 Engine",
		image: "/img/v8_engine.png",
		description:
			"기본적으로 JavaScript Enginge은 자바스크립트를 해석하여 AST(Abstract Syntax Tree, 추상적 구문 트리)를 생성한다. 그리고 AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드(intermediate code)인 byte code를 생성하여 실행한다.",
	},
	{
		to: "docs/category/javascript",
		title: "Javascript",
		image: "/img/event_loop_and_task_queue.png",
		description:
			"실행 컨텍스트(execution context)는 LexicalEnvironment 컴포넌트와 VariableEnvironment 컴포넌트로 구성된다.",
	},
];
