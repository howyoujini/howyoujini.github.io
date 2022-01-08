---
emoji: 🧢
title: REST api
date: '2021-12-02 23:00:00'
author: 홍유진
tags: blog gatsby theme 개츠비 테마
categories: 웹공부 Network
---

<!-- 프로젝트 UX/UI 웹공부 3D Network Server 아키텍쳐 Error -->

<!-- ![github-blog-1.png](github-blog-1.png) -->

## 👋 소개

<!-- https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html -->

블로그를 직접 운영하면서 조금씩 그려봤던 이상적인 개발 블로그 테마를 Gatsby를 통해 만들어보게 되었습니다.  
이 테마가 블로그를 운영하고자 하시는 분들에게 자신의 이야기를 잘 담을 수 있는 공간이 되었으면 좋겠습니다.🙌

블로그 테마가 맘에 드셨다면 아래 과정을 통해 자신의 블로그를 만들어보시길 바랍니다!

> 혹시 만드시는 과정에서 궁금하신 점이나 어려움이 있으시다면 [이슈](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/new)를 통해 문의 남겨주세요!  
> [스타](https://github.com/zoomKoding/zoomkoding.com)는 블로그 테마를 지속적으로 발전시키는데 큰 힘이 됩니다!⭐️

## 🚀 시작하기

Github Page나 Netlify 중 원하시는 배포 환경에 따라 다음 과정을 진행하시면 빠르게 블로그를 만드실 수 있습니다.

### 🦖 GitHub Page로 만들기

깃헙 페이지를 통해 블로그를 만드시다면 아래 글을 참고해주세요!  
[Gatsby 테마로 GitHub Blog 만들기](https://www.zoomkoding.com/gatsby-github-blog/)

### 🔧 Netlify로 만들기

아래 버튼을 활용하면 개인 계정에 `zoomkoding-gatsby-blog`를 사용하고 있는 Repository 생성과 Netlify에 배포를 동시에 진행할 수 있습니다. 이후에, 생성된 Repository를 clone합니다.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zoomkoding/zoomkoding-gatsby-blog)

### 🏃‍♀️ 실행하기

아래 명령어를 실행하여 로컬 환경에 블로그를 실행합니다.

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

<br/>

위 명령어가 문제 없이 실행됐다면 [http://localhost:8000](http://localhost:8000)에서 블로그를 확인하실 수 있습니다.

## ⚙️ 블로그 정보 입력하기

위의 과정을 다 진행하셨다면 배포와 개발 환경이 세팅이 끝났습니다! 🙌  
이제 블로그 정보를 입력하게 되면 나만의 블로그가 만들어지게 됩니다. 이를 위해 `gatsby-meta-config.js`에 있는 여러값들을 변경해줍니다.

### 1. 블로그 기본 정보

```js
title: '' // zoomkoding.com
description: '' // 줌코딩의 개발일기
language: 'ko', // 'ko', 'en' (영어 버전도 지원하고 있습니다.)
siteUrl: '' // https://www.zoomkoding.com
ogImage: '/og-image.png', // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하시면 됩니다.
```

### 2. 댓글 설정

블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정하실 수 있습니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```js
comments: {
    utterances: {
        repo: '' // zoomkoding/zoomkoding-gatsby-blog
    },
}

```

### 3. 글쓴이 정보

글쓴이(author)에 입력하신 정보는 홈페이지와 about 페이지 상단에 있는 글쓴이를 소개하는 섹션인 bio에서 사용됩니다. **description**에 자신을 설명하는 문구들을 넣으면 애니메이션으로 보여지게 됩니다. bio에 들어가는 이미지를 바꾸시려면 `assets`에 원하시는 파일을 추가하시고 파일의 이름을 **thumbnail**에 넣어주시면 됩니다.(gif도 지원합니다!)

아이폰 미모티콘으로 thumbnail을 만드는 방법이 궁금하시면 [이 글](https://www.zoomkoding.com/memoji-to-gif/)을 참고해주세요!

> 🤖 위에서 설정한 언어에 따라 description의 포맷이 달라집니다.

```js
author: {
    name: '정진혁',
    bio: {
      role: '개발자',
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif',
    },
    social: {
      github: 'https://github.com/zoomKoding',
      linkedIn: 'https://www.linkedin.com/in/jinhyeok-jeong-800871192',
      email: 'zoomkoding@gmail.com',
    },
},
```

## 🙋‍♀️ about page 만들기

about 페이지 또한 gatsby-meta-config.js를 통해 생성됩니다. about 하위에 있는 timestamps와 projects에 각각 정보를 입력하시면 about 페이지가 자동 생성됩니다.

### 1. timestamps

아래와 같이 각 timestamp 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 timestamps section에 보여지게 됩니다.

> links에 해당 정보가 없다면 생략해도 됩니다.

```js
{
    date: '2021.02 ~',
    activity: '개인 블로그 개발 및 운영',
    links: {
        post: '/gatsby-starter-zoomkoding-introduction',
        github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        demo: 'https://www.zoomkoding.com',
    },
},
```

### 2. projects

마찬가지로 각 project 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 projects section에 보여지게 됩니다.

```js
{
  title: '개발 블로그 테마 개발',
  description:
    '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
  techStack: ['gatsby', 'react'],
  thumbnailUrl: 'blog.png',
  links: {
    post: '/gatsby-starter-zoomkoding-introduction',
    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
    demo: 'https://www.zoomkoding.com',
  }
}
```

<br/>

그렇게 내용을 문제 없이 입력하셨다면 나만의 블로그가 탄생한 것을 확인하실 수 있습니다.🎉

> 변동사항을 실행 중인 블로그에서 확인하시려면 `npm start`를 통해 재실행해주세요!

## ✍️ 글 쓰기

본격적으로 블로그에 글을 쓰려면 `/content` 아래에 디렉토리를 생성하고 `index.md`에 markdown으로 작성하시면 됩니다.

> 이 때, 폴더의 이름은 경로를 생성하는데 됩니다.

### 🏗 메타 정보

index.md 파일의 상단에는 아래와 같이 emoji, title, date, author, tags, categories 정보를 제공해야 합니다.

> emoji는 글머리에 보여지게 되며, categories는 띄어쓰기로 나누어 여러개를 입력할 수 있습니다.

```
---
emoji: 🧢
title: Getting Started
date: '2021-03-22 23:00:00'
author: 줌코딩
tags: tutorial
categories: tutorial
---
```

### 🖼 이미지 경로

글에 이미지를 첨부하고 싶으시다면 같은 디렉토리에 이미지 파일을 추가하셔서 아래와 같이 사용하시면 됩니다.

```
![사진](./[이미지 파일명])
```

### 🔍 목차 생성

글의 우측에 목차가 보이기를 원하신다면 `index.md` 파일 맨 아래에 다음 내용을 추가하시면 자동으로 목차가 생성됩니다.

    ```toc
    ```

### 💡 버그 리포트 & 문의

궁금하신 점이 있으시다면 [이슈](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/new)로 남겨주시면 최대한 빠르게 답변 드리도록 하겠습니다!🙋‍♂️

> 🤔 혹시 특정 기능이 없어서 테마 사용을 망설이시거나 제안하고 싶으신 기능이 있으시다면,  
> 👉 [여기](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/40)에 댓글 남겨주세요! 적극적으로 반영하겠습니다 :)

_<p style="font-size:16px; color:grey">**API**, 처음 들었을 때 굉장히 있어보이면서 나랑은 친해지기 어려운 용어라고 생각했다.
사용자와 프로덕트간을 연결해주는 것을 UI(User Interface)라는 것은 익히 알고 있었지만
API라는 단어는 너무 생소하고 벽으로 느껴졌다.
계속 멀게만 느낄 수 없기에 **드디어** API를 마주보고 파헤쳐보는 시간을 가지게 되었다.</p>_

### API 란?

`Application Programming Interface`의 약자로 프로그램을 실행하는 인터페이스

### RESTful API 란?

`Representational State Transfer`의 약자로
웹상에서 사용되는 여러 리소스를 HTTP URI로 표현하고 그 리소스에 대한 행위를 HTTP Method로 정의하는 방식.
즉, 리소스(HTTP URI로 정의된)를 어떻게 한다는 구조적으로(HTTP Method + Payload) 깔끔히 표현

-> uri 자체로 정보를 표현할 수 있어야한다

API :
GraphQL
gRPC
REST : 학습에 있어서 진입장벽이 낮다. 비싼 프로그램이 필요없다.

https://meetup.toast.com/posts/92

![](https://images.velog.io/images/howyoujini/post/6e960ffc-bec3-4bc4-8139-afb783abbe2e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.19.17.png)
![](https://images.velog.io/images/howyoujini/post/f01924ab-78b0-42ab-804c-d70d128007db/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.25.30.png)
![](https://images.velog.io/images/howyoujini/post/6a7312b8-4c21-4cd7-866a-d8f94a0e7bb2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.25.54.png)
![](https://images.velog.io/images/howyoujini/post/724f0279-c7eb-411c-857d-07a965b1a67d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-24%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.19.15.png)

self descriptiveness

RESTful API 설계규칙
URI 정보를 명확하게 표현해야한다.

- resoude는 명사를 사용
  GET/user/1 -> GET/users/1

resource에 대한 행위를 HTTP Method (GET,POST, PUT, DELETE)로 표현한다.

> **GET** : 조회 (받겠다)
> **POST** : resource 생성 (보내겠다)
> **PUT** : resource 전체 갱신 (놓겠다/ 넣겠다)
> **DELETE** :resource 삭제 (지정한 서버의 파일을 삭제하겠다)

- URI 에 HTTP Method가 포함되서는 안된다.
- URI에 동사가 포함되서는 안된다.
  GET/user/show/1 -> GET/users/1
  POST insert/user/2 -> POST/users/2

- resouce 사이에 연관관계가 있는 경우
  리소스/고유ID/관계 있는 리소스
  GET/users/{use_id}/profile
- 파일의 경우 payload의 포맷을 나타내기 위한 파일 확장자를 URI에 포함시키지 않는다.
  GET user/1/proffile-photo.jpg -> GET user/1/proffile-photo

- URI는 / 구분자를 사용하여 자원의 계층 관계를 나타내는데 사용한다.
- URI 마지막 문자로 /를 포함하지 않는다.
  GET users/portfolios

- 불가피하게 URI가 길어지는 경우 -를 사용하여 가독성을 높인다.
- \_ 는 사용하지 않는다.
  URI 경로에는 대문자 사용을 피하고 있다.

![](https://images.velog.io/images/howyoujini/post/ade491c2-d846-49e7-9c87-c4527330b69b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.47.17.png)

![](https://images.velog.io/images/howyoujini/post/faf8b554-8d54-4c08-a654-e663f37a4120/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.51.20.png)
![](https://images.velog.io/images/howyoujini/post/bb17df64-8eb1-4a8b-ae28-6f8e9678e8c4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.56.36.png)![](https://images.velog.io/images/howyoujini/post/2dce894b-19f6-4309-be5b-e2684dce1303/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.51.29.png)
![](https://images.velog.io/images/howyoujini/post/092e9bc3-a451-4f25-8852-04851ac57d75/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.54.34.png)
![](https://images.velog.io/images/howyoujini/post/dcf9bff4-4de6-4def-aa3b-1bdb7358b602/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.59.02.png)

![](https://images.velog.io/images/howyoujini/post/c979baa5-b69d-4307-8fa6-a8a62592a6e6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.00.13.png)
![](https://images.velog.io/images/howyoujini/post/e24cd4aa-507a-4dbf-8cba-d28ddc76343a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.02.05.png)

-> Best Practice
Query parameters -> Filtering, Sorting, Searching

- [ ] RESTful API 개념을 이해하고 URL 주소를 RESTful 식으로 구현할 수 있다.
- [ ] RESTful API 와 GraphQL 의 차이점을 이해하고 설명할 수 있다.

```toc

```
