module.exports = {
  title: 'Doc',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/pages/': [
        '',     /* /foo/ */
        'doc1',  /* /foo/one.html */
        'doc2'   /* /foo/two.html */
      ],

      // fallback
      '/': [
        {
          title: 'Pages',
          collapsable: false,
          children: ['/pages/']
        }
      ]
    }
  }
}