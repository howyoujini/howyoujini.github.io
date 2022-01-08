---
emoji: ♻️
title: SPA(Single Page Application)
date: '2021-10-29 22:00:00'
author: 홍유진
tags: SPA React 리액트
categories: 웹공부
---

<!-- 프로젝트 UX/UI 웹공부 3D Network Server 아키텍쳐 Error -->

## SPA

### React 란?

웹앱을 만들때 가장 많은 사람들이 사용하는 자바스크립트 기반의 (Facebook에서 만든) 프레임워크

    ** 웹앱의 장점 (인스타, 페북 등)

    1. 모바일 앱으로 발행가능
    2. 앱처럼 뛰어난 UX
    3. 그냥 웹사이트보다 비즈니스적인 강점 - 마케팅의 활용이 좋음

### React 설치

1. Node.js 설치

\*\* 최신버전으로 깔아야 버그가 안생긴다고 ([코딩애플 React 기초 1강](https://www.youtube.com/watch?v=nahwuaXmgt8&list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy&index=2)) 하셨는데 최신버전보단 가장 많은 사람들이 쓰는 버전을 다운받는 것을 추천.

[리액트 17.0.2 버전 에러사항 깃허브주소] (https://github.com/facebook/react/releases/tag/v17.0.2)

2. 폴더 생성후
3. 리액트 프로젝트 생성
   VSC 속 터미널을 연다음 `npx create-react-app (+ 프로젝트 명)`
   (라이브러리임)

4. 설치중
5. 터미널에 `cd (+ 프로젝트명)` Enter
   (해당폴더로 들어가는 중)
   (파일 경로 확인하고 싶으면 `pwd` 터미널에 쳐보기 )
6. VSC : 터미널 열어서 `npm start` 입력

리액트 설치 방법
NPM(Node Package Manager)
[참고](https://seizemymoment.tistory.com/106)

7. 리액트 설치 완료 !

[npm과 npx의 차이는 뭘까?](https://seizemymoment.tistory.com/106)

---

CRA - 구성하는 폴더
node.modules -
package.json - 요약본 (프로젝트 이름, 버전, dependencies(의존성:))
git ignore - git은 버전 관리 프로그램인데, 깃 이그노어를 설치하면 깃을 추적하지 않아서 깃헙에 올라가지 않음.공유되지 않지 않아야할 민감한 정보는 여기다 적어야함. 혹은 공유해야할 사람과 중복으로 가지고 있으면.

- 공유받을 때 git clone 할때, node.modules는 받을 필요없고 package.json만 받으면 된다.

화면을 그리는 폴더 ㅣㅊ 파일
index.html
index.js -> ReactDOM.render 함수의 인자는 두개 : 첫번째는 화면에 보여주고 싶은 컴포넌트 / 두번째는 화면에 보여주고 싶은 컴포넌트의 위치
App.js -> 현재 보여주는 스크린 첫 면

src -> component's' : 공통 컴포넌트 관리 nav, footer
pages -> 페이지 내의 컴포넌트 경우 이 폴더에서 관리
styles -> 공통쓰이는 css

node.js를 굳이 필요한 이유는?
React -> node.js -> browser
JSX, syntax, bundling, env 다ㅏ 구동하고 브라우저로 보내야하기 때문에

npm
package : 하나하나 프로그램들, (개발용어들은 먼저 쓰이다ㅏ가 나중에 정확히 정의를 하려고 한다. 그래서 좀 애매할 수도 있다.)

### JSX 문법

    ** React란 html과 css, js를 동시에 한 파일내에서 작성하는 프레임워크이다.

- App.js 파일이 메인페이지이다.
- JSX

1. 태그에 class를 주고 싶으면?

```
<div className = '클래스명'>
```

2. 리액트에서 데이터 바인딩 쉽게 할 수 있음

```
** 데이터 바인딩이랑? 새로고침을 하지 않아도 쉽게 쉽게 재렌더링 할 수 있음!

** {중괄호} 를 써야함!
   {변수명, 함수명등}
```

그냥 {중괄호 안에 함수나 for, if 는 쓸 수 없음}

3. JSX에서 style 속성 집어넣을때

```
style = {마찬가지로 중괄호, object 자료형으로 만든 스타일}
```

### useState

React에서 데이터는 (데이터 저장방법 2가지)

```
1. 변수에 넣거나
2. state에 넣던가
```

- state를 쓰는 가장 큰 장점 : 새로고침하지 않아도 html이 스무스하게 재렌더링이 된다는 것.

1. {useState} 상단에 첨부
2. useState('데이터')
3. 문자, 숫자, array, object 다 저장가능
   \*\* ES6 destructuring 문법 참고하기

### EventListener 추가방법

이벤트를 추가한다는 것 = 재렌더링이 많이 일어난다 = 데이터바인딩 쉽게 할 수 있게 만들자

```
onClick ={클릭될 때 실항할 함수}
onClick = { ()=>{실행할 내용} }
```

### setState

데이터를 변경할 때,

1.수정된 [...데이터]

state의 복사본(deep copy)을 새로 만들어서 수정하기 (원본 state 건들지 마!!)

    ** deep copy란? 값 공유하지 않고 서로 독립적인 값을 가지는 복사를 뜻함

Array, Object state 데이터 수정방법

2. 변경함수 ('대체할 데이터')

state의 복사본(deep copy)을 새로 만들어서 수정하기 (원본 state 건들지 마!!)

    ** deep copy란? 값 공유하지 않고 서로 독립적인 값을 가지는 복사를 뜻함

정리 >> 우선 기존 state를 deep copy한 후, 대체할 데이터를 반영하고, 변경함수()에 집어넣기

### component

.html 파일을 깔끔하게 축약해서 보기 예쁘게 만드는 문법

    ** 장점 : 덩어리로 관리할 수 있음. 반복하여 사용되는 html활용. 자주 변경되는 html UI. 다른 페이지 만들때.

    ** 단점 : state 쓸 때 복잡해짐. (상위 component에서 만든 state를 쓰려면 props 문법을 활용할 수 있다)

- html을 하나의 단어로 치환하여 사용한다. (하나의 덩어리로 활용가능)

App.js에서 활용문법

```
function 단어(){
return(
/// <html 문법>
)
}
```

---

_React 설치부터 정말 쉽지 않았다. js 기반의 프레임워크인만큼 앞으로 벌어질 재밌는 일에 대해 기대된다 😊_
