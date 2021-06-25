export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60d5f1524946a45a6145f944',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5i5k95jy',
                  apiId: '61f2dab1-c0fb-44c3-9aeb-2dd27e0138b1'
                },
                {
                  buildHookId: '60d5f152243afd52f6e3c0ef',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ohu6soxn',
                  apiId: 'e39c6011-c4ac-4a01-b3b9-ac63c7c14374'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denverjess/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ohu6soxn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
