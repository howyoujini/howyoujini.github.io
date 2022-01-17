module.exports = {
  title: `howyoujini`,
  description: `어떡해든 어떻게든 개발중`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://howyoujini.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `홍유진`,
    bio: {
      role: `크리에이티브 디벨로퍼`,
      description: ['아름다운 경험을 주는', '창의적으로 주도하는', '더 나은 것을 설계하는'],
      thumbnail: 'profile.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/howyoujini`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `howyoujini@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.02 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/howyoujini',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Ready Books',
        description:
          '함께 책 읽을 준비 되셨나요? 회원이 구매한 책 3D로 구현 및 클릭시 상세페이지 이동 (라이브러리 : react-three-fiber), 베스트 셀러 10개 슬라이드 (라이브러리 : react-slick), 전체페이지 페이지네이션',
        techStack: ['React', 'styled component', 'three.js'],
        thumbnailUrl: 'readybooks.gif',
        links: {
          post: '/',
          github: 'https://github.com/howyoujini/27-2nd-ReadyBooks-frontend',
          demo: 'http://readyreadybooks.s3-website.ap-northeast-2.amazonaws.com/',
        },
      },
    ],
  },
};
