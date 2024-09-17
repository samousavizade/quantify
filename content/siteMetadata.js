const siteMetadata = {
  title: 'Quantifiable',
  author: 'Ahura',
  headerTitle: 'Quantifiable',
  description: 'Quantifying the Future...',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/dlarroder/dalelarroder-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dlarroder@gmail.com',
  github: 'https://github.com/',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/',
  steam: 'https://steamcommunity.com/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
