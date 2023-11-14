'use client'
import { motion } from 'framer-motion'
import cls from './page.module.scss'
import { PAGE_TRANSITION } from '@/constants'
import { FeatureCard } from '@/components/common'

const aboutInfo = [
  {
    number: '01',
    title: '# Tech Stack',
    description:
      'I use React with TypeScript to build interactive user interfaces, and Redux for state management. I also use Node.js and interact with databases such as MongoDB and PostgeSQL',
  },
  {
    number: '02',
    title: '# Often use',
    description:
      'These are the libraries, technologies and tools that I use a lot in projects.             Next.js / Redux / Zustand / SCSS  / Tailwind / Webpack / Vite / Axios / GraphQL / Nest.js / Express / Prisma  / Git',
  },
  {
    number: '03',
    title: '# Learning',
    description:
      "I have a keen interest for frontend and backend development. Creating intuitive user interfaces using modern technologies and frameworks is something I find truly engaging. Additionally, I've been exploring mobile development, eager to further develop my skills in this area. Beyond development, I'm also delving into algorithms and data structures, seeking to strengthen my problem-solving abilities. In my ongoing university studies, I'm gaining proficiency in Assembler and C++, building a solid foundation in programming.",
  },
  {
    number: '04',
    title: '# About Me',
    description:
      "I have a keen interest for frontend and backend development. Creating intuitive user interfaces using modern technologies and frameworks is something I find truly engaging. Additionally, I've been exploring mobile development, eager to further develop my skills in this area. Beyond development, I'm also delving into algorithms and data structures, seeking to strengthen my problem-solving abilities. In my ongoing university studies, I'm gaining proficiency in Assembler and C++, building a solid foundation in programming.",
  },
  {
    number: '05',
    title: '# Skills',
    description:
      "I specialize in developing SPAs using React and NextJS. I am confident in JavaScript ES6+ and TypeScript, and my knowledge of React 18, covering important concepts such as component lifecycle, state management, working with props, hooks, using context, and implementing portals. I know how to unit test React components using standard libraries such as Jest and React-testing-library. Additionally, I prioritize application optimization through techniques like memoization, throttle, debounce and lazy loading. Also, I'm proficient in seamless interaction with remote services via HTTP, AJAX, Websockets ensuring data handling and processing.",
  },
  {
    number: '06',
    title: '# Future Workplace',
    description:
      "In my vision, the ideal company combines an innovative culture with a commitment to high quality standards. I would like to work for a product-oriented company or startup where creativity and innovation are valued as highly as meticulous attention to detail. To be involved in challenging and forward-thinking projects that will have a real impact on the industry and the future. I want to contribute directly to the development of products that can simplify and improve people's daily lives. It is important to me that companies have opportunities for continuous growth and learning. I want to work in an environment where personal and professional dynamics are valued and where employees are encouraged to continuously develop their skills.",
  },
]

export default function About() {
  return (
    <motion.section
      className={cls.section}
      variants={PAGE_TRANSITION}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className={cls.inner}>
        {aboutInfo.map((ai) => (
          <FeatureCard
            number={ai.number}
            title={ai.title}
            description={ai.description}
            key={ai.number}
          />
        ))}
      </div>
    </motion.section>
  )
}
