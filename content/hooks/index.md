---
emoji: 🧢
title: hooks 정리
date: '2021-12-01 23:00:00'
author: 홍유진
tags: hooks
categories: 웹공부
---

<!-- 프로젝트 UX/UI 웹공부 3D Network Server 아키텍쳐 Error -->

## 👋 소개

### 관심사의 분리(SoC : Separation of Concerns)가 무엇일까?

-> API 공식문서를 읽어야 하는 상황이 생길지도 모른다. 하지만 우리가 앞으로 읽어야 하는 상황이 많아질 것이기 때문에 읽는 연습을 해야한다.

왜 관심사를 분리하기 시작했을까?

> 내가 만든 컴포넌트에 ~~한 조건이 추가되면 어떻게 하지?
> 이미 한참 만들었는데 ~~ 부분이 변경되어야하면 어떻게 하지?
> 처음 설계할 때는 ~~한 경우까지는 생각하지 않았는데 ~~에서 쓰이면 어떻게 하지?

<걱정>
책임의 분리 : 우리의 코드가 하나의 관심만 가지고 그 기능만 확실히 하게 하자.

1. **Loose Coupling** (낮은 결합도, 각각의 코드가 서로 얽혀있지 않고 독립적으로 잘 분리되어 있음)
2. **High Conhesive** (높은 응집도, 유사한 내용끼리 비슷한 위치에 잘 모여있음)

장점 :
코드가 명료해짐.
코드 재사용성이 올라감.
유지보수가 용이함.
테스트 코드를 작성하기 쉬워짐.

### Motivation

1. View와 Logic의 분리
   View : UI
   Logic : 기능

<Custom Hook이 존재하지 않았을 때, 컴포넌트의 분리>
Presentational Component : UI Only 컴포넌트
Container Component : Logic Only 컴포넌트

<Custom Hook 사용>
