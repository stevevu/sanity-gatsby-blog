export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f45e4120061090fa57651ca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a4zj4wk6',
                  apiId: '571e7e8a-84ba-4fb2-b58a-d7f0a8b65fce'
                },
                {
                  buildHookId: '5f45e412d47f5275bfa408cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4w6s39f4',
                  apiId: '68ff24c2-dde4-4f1f-a0f0-0cb91590d91c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevevu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4w6s39f4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
