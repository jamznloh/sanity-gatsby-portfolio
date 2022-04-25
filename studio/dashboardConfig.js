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
                  buildHookId: '6266520eedbd5754d1ea0fdc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z9bxoruz',
                  apiId: 'ad37a5ef-ff70-4dcc-8f54-e10072ca8933'
                },
                {
                  buildHookId: '6266520e3dfcf05b90b519d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gek78owe',
                  apiId: '457a38a9-7fbc-45cc-8df7-a59c59464bb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamznloh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gek78owe.netlify.app',
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
