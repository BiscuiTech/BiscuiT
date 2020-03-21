export enum ETechStack {
  apollo,
  graphql,
  react,
  prisma,
  prostgresql,
  'next.js'
}

interface IProject {
  title: string,
  description: string,
  imageUrl: string,
  imageAlt: string,
  websiteLink: string,
  techStack: ETechStack[],
}

export const ConfiguredTech = [
  { name: 'apollo', id: 'apollo', background: '#FFFFFF', color: '#FFFFFF' },
  { name: 'graphql', id: 'graphql', background: '#E00098', color: '#FFFFFF' },
  { name: 'react', id: 'react', background: '#60D9FB', color: '#FFFFFF' },
  { name: 'prisma', id: 'prisma', background: '#0C344B', color: '#FFFFFF' },
  { name: 'postgresql', id: 'postgresql', background: '#0071BC', color: '#FFFFFF' },
  { name: 'next.js', id: 'nextjs', background: '#000000', color: '#FFFFFF' },
]

const projects: IProject[] = [
  {
    title: 'EquipeValcourt.com',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!',
    imageUrl: '',
    imageAlt: 'Lorem ipsum dolor sit amet',
    websiteLink: 'https://equipevalcourt.com',
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.prostgresql
    ]
  },
  {
    title: 'EquipeValcourt.com',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!',
    imageUrl: '',
    imageAlt: 'Lorem ipsum dolor sit amet',
    websiteLink: 'https://equipevalcourt.com',
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.prostgresql
    ]
  }
]

export default projects