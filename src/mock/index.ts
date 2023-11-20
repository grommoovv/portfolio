import { Project } from '@/types'

const aboutInfo = [
  {
    number: '01',
    title: '# Tech Stack',
    description:
      'I write in TypeScript, use React to build interactive UI with Redux for state management. I also use NodeJS for RESTful API and databases such as MongoDB and PostgeSQL',
  },
  {
    number: '02',
    title: '# Often use',
    description:
      'These are the libraries, technologies and tools that I use a lot in projects.             Next.js / Redux / Zustand / SCSS  / Tailwind / Webpack / Vite / Axios / GraphQL / Nest.js / Express / Prisma  / Git',
  },
  {
    number: '03',
    title: '# Skills',
    description:
      'I specialize in SPA development using React and NextJS. I am confident in JavaScript and TypeScript, and my knowledge of React 18 covers basic and advanced concepts of the technology. I know how to write unit tests, optimize applications, interact with remote api services via HTTP, AJAX, Websockets providing data processing.',
  },
  {
    number: '04',
    title: '# Learning',
    description:
      "I have a keen interest for frontend and backend development. Creating intuitive user interfaces using modern technologies is something I find truly engaging. Additionally, I've been exploring mobile development, eager to further develop my skills in this area. Beyond development, I'm also delving into algorithms and data structures, seeking to strengthen my problem-solving abilities. In my ongoing university studies, I'm gaining proficiency in Assembler and C++, building a solid foundation in programming.",
  },
  {
    number: '05',
    title: '# Future Workplace',
    description:
      "I would like to work in a product-focused, SaaS or FinTech company or startup, participating in challenging and promising projects that will have a real impact on the industry and its future. I want to contribute directly to the development of products that can simplify and improve people's daily lives.",
  },
]

const projects: Project[] = [
  {
    id: 1,
    title: 'Snapgram',
    stack: ['TypeScript', 'React', 'Appwrite', 'Shadcn-ui', 'Tailwindcss'],
    description:
      'A social network with the ability to log in, add content, comment on posts, give likes and more.',
    demo: 'https://snapgram-13.vercel.app/',
    code: 'https://github.com/gromvgeo/snapgram',
  },
  {
    id: 2,
    title: 'Threads',
    stack: ['TypeScript', 'NextJS 14', 'Clerk', 'MogoDB', 'Shadcn-ui', 'Tailwindcss'],
    description:
      'A social network, analogous to threads. Ability to register, create communities, add posts and comments.',
    demo: 'https://threads-13.vercel.app/',
    code: 'https://github.com/gromvgeo/threads',
  },
  {
    id: 3,
    title: 'Task Manager',
    stack: ['TypeScript', 'NextJS 14', 'Clerk', 'MongoDB', 'Styled-Components'],
    description:
      'A common Todo app, with the ability to add, modify and delete a post. The application also has authorization.',
    demo: 'https://task-manager-13.vercel.app/',
    code: 'https://github.com/gromvgeo/task-manager',
  },
  {
    id: 4,
    title: 'Neptune Dashboard',
    stack: ['TypeScript', 'NextJS 14'],
    description:
      'Admin panel with the ability to manage users, stock items, workers. Monitoring of transactions and statistics. Under development.',
    demo: '',
    code: 'https://github.com/gromvgeo/neptune',
  },
]

export { aboutInfo, projects }
