---
emoji: ♻️
title: 가장 상단에서 상태를 효율적으로 관리해야 한다면? Redux
date: '2021-12-21 22:00:00'
author: 홍유진
tags: 리덕스 redux 전역상태관리 action
categories: 웹공부
---

<!-- 프로젝트 UX/UI 웹공부 3D Network Server 아키텍쳐 Error -->

## Redux의 필요성

React로 웹개발을 진행하면서 React에서는 상태(state)의 이동이 "단방향"임을 충분히 인지할 수 있었다.

특히 부모에서 뿌려주는 props들은 자식으로 내려갔다가 부모에서, 혹은 조상에서 그 상태가 필요하게 되면 위로 거스를 수 없었고 굳이 거스른다면 "lifting state"를 사용하여 함수의 인자로 상태를 실어서 보내주는 작업을 해야 했다.
한두페이지 작성할 땐 할만 했었다. 하지만 프로젝트가 점점 커질 수록 복잡하고 꼬여가기 시작했다. 나는 이런 불편함을 직접 겪어봐서 더 절실하게 대체 방안이 필요했다.

역시 사람들의 생각은 다 비슷한가 보다. 나처럼 이전에 불편함을 겪어본 사람들이 redux라는 전역상태관리 라이브러리를 만들었다.

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

```toc

```
