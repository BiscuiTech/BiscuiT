export enum ETechStack {
  "apollo" = "apollo",
  "graphql" = "graphql",
  "react" = "react",
  "prisma" = "prisma",
  "postgresql" = "postgresql",
  "next.js" = "nextjs",
}

interface IProject {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  websiteLink: string;
  techStack: ETechStack[];
}

const projects: IProject[] = [
  {
    title: "EquipeValcourt.com",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!",
    imageUrl: "",
    imageAlt: "Lorem ipsum dolor sit amet",
    websiteLink: "https://equipevalcourt.com",
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.postgresql,
    ],
  },
  {
    title: "EquipeValcourt.com",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!",
    imageUrl: "",
    imageAlt: "Lorem ipsum dolor sit amet",
    websiteLink: "https://equipevalcourt.com",
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.postgresql,
    ],
  },
  {
    title: "EquipeValcourt.com",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!",
    imageUrl: "",
    imageAlt: "Lorem ipsum dolor sit amet",
    websiteLink: "https://equipevalcourt.com",
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.postgresql,
    ],
  },
  {
    title: "EquipeValcourt.com",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!",
    imageUrl: "",
    imageAlt: "Lorem ipsum dolor sit amet",
    websiteLink: "https://equipevalcourt.com",
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.postgresql,
    ],
  },
  {
    title: "EquipeValcourt.com",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!",
    imageUrl: "",
    imageAlt: "Lorem ipsum dolor sit amet",
    websiteLink: "https://equipevalcourt.com",
    techStack: [
      ETechStack.apollo,
      ETechStack["next.js"],
      ETechStack.graphql,
      ETechStack.postgresql,
    ],
  },
];

export default projects;
