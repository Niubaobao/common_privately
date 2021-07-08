/*
 * @Author: your name
 * @Date: 2021-07-08 19:35:20
 * @LastEditTime: 2021-07-08 19:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /utils/docs/.vuepress/config.js
 */
module.exports = {
    title: 'Adroi媒体API 接口文档',  // 设置网站标题
    description : 'Adroi',
    base : '/v1/adroi-h5/adroiapi/',
    themeConfig : {
      nav : [
          { text: '接口定义', link: '/apiword' },
          { text: '接口字段定义', link: '/api' },
          { text: '附录：错误码', link: '/error' }
      ],
      sidebar: {
          '/' : [
            "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "apiword",  //根目录创建 apiword.md文件
                "api",//根目录创建 api.md文件
                "error"  //根目录创建 error.md文件
            ]
      },
      sidebarDepth : 2
    }
  }
