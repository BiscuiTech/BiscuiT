enum TechStack {
  apollo,
  graphql,
  react,
  prisma,
  prostgresql,
  'next.js'
}

const projects = [
  {
    title: 'EquipeValcourt.com',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!',
    imageUrl: '',
    imageAlt: 'Lorem ipsum dolor sit amet',
    techStack: [
      TechStack.apollo,
      TechStack["next.js"],
      TechStack.graphql,
      TechStack.prostgresql
    ]
  }
]

export default projects