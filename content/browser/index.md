---
emoji:
title: Browser의 작동원리
date: '2022-03-10 13:49:00'
author: 홍유진
tags: browser
categories: Web
---

<!-- 프로젝트 UX/UI Web 3D Network Structure Server 아키텍쳐 Error -->

#### Browser : browse [둘러보는 것] → ‘시각적으로 보여주기 위한 역할’

즉, 사용자가 선택한 자원(Resource)을 서버에 요청하고 브라우저에 표시하는 것

### 브라우저의 기본 구조

- **사용자 인터페이스** : 주소표시줄, 이전/다음 버튼, 홈버튼, 새로고침/정지 버튼 등 요청한 페이지를 보여주는 창 외에 사용자가 컨트롤 할 수 있는 부분.
- **브라우저 엔진** : 사용자 인터페이스와 렌더링 엔진 사이에 동작을 제어한다.
- **렌더링 엔진** : 요청한 URI를 브라우저 엔진에게 받아서 server에게 요청한다(통신). server로 부터 URI에 해당하는 데이터(HTML, CSS, JavaScript)를 받아서 파싱한 후 렌더링한다. (chrome blink)
- **통신** : 렌더링 엔진으로부터 HTTP 요청 등을 받아서 네트워크 처리 후 응답을 전달한다. (OS 단에서 실행)
- **자바스크립트 해석기/ 엔진** : JavaScript 를 파싱한다. (chrome V8)
- **자료 저장소** : 쿠키 등의 자료를 컴퓨터 하드디스크에 저장한다. (HTML5 부터 Web Database에 저장가능) → 쿠키는 프론트 관리, 브라우저 관리가 가능한가?
- **UI 벡엔드** : render tree를 browser 에 그리는 역할을 담당한다. - 브라우저에 내장된 UI 그림

![](https://images.velog.io/images/howyoujini/post/5b7bf203-ec84-4a95-948e-031ee1559aa7/Untitled.png)
