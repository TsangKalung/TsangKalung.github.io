module.exports = {
  title: "Tsang's tech-diary",
  description: "Tsang's tech-diary",
  base: "/",
  dest: "./docs/.vuepress/dist",
  head: [
    ['link', { rel: 'icon', href: `./favicon.ico` }]
  ],

  themeConfig: {
    nav: [{
      text: "Github",
      link: "https://github.com/TsangKalung"
    }],
    sidebar: [{
      title: "About",
      collapsable: false,
      children: ["/", "/Interview.md"]
    },
    {
      title: "Dairy",
      collapsable: false,
      children: [
        "/2018/5/3.md",
        "2018/5/4.md",
        "2018/5/5.md",
        "2018/5/6.md",
        "2018/5/7.md",
        "2018/5/8.md",
        "2018/5/10.md",
        "2018/5/11.md",
        "2018/5/13.md",
        "2018/5/14.md",
        "2018/5/17.md",
        "2018/5/18.md",
        "2018/5/19.md",
        "2018/5/21.md",
        "2018/5/22.md",
        "2018/5/24.md",
        "2018/5/25.md",
        "2018/6/3.md",
        "2018/6/4.md",
        "2018/6/9.md",
        "2018/7/9.md",
        "2018/10/4.md",
        "2018/10/9.md",
        "2018/10/16.md",
        '/2019/2019年如何在App Store上架.md'
      ]
    }
    ]
  }
};
