'use client'
import { motion } from 'framer-motion'
import { ArrowIconOne } from '@/components/icons'
import cls from './page.module.scss'
import { PAGE_TRANSITION } from '@/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <motion.section
      className={cls.section}
      variants={PAGE_TRANSITION}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className={cls.introduce}>
        <div className={cls.title}>George Gromov</div>
        <div className={cls.text}>
          <p># I am a frontend developer with 2 years of experience based in Russia</p>
          <p>
            # I specializing on creating intuitive UI, application functionality and UX optimization
          </p>
          <p># My favorite areas of development are fintech and product</p>
        </div>

        <div className={cls.info}>
          <a href='https://t.me/incognxto'>t.me/incognxto</a>
          <a href='https://github.com/gromvgeo'>github.com/gromvgeo</a>
          <a href='mailto:gromov.dev13@gmail.com'>gromov.dev13@gmail.com</a>
          <a href='https://www.linkedin.com/in/gromov13dev/'>www.linkedin.com/in/gromov13dev</a>
        </div>
      </div>

      <div className={cls.stack}>
        <div className={cls.top}>
          <span>
            I mostly write in TypeSript with React for UI development and Next.JS as main framework.
          </span>
          <span>For state management I use Context API, Redux & Zustand </span>
        </div>
        <div className={cls.title}>Technology Stack</div>
      </div>

      <div className={cls.about}>
        <Link className={cls.link} href={'/about'}>
          <div className={cls.top}>
            <div className={cls.pretitle}>
              <span>discover</span>
              <span>my history</span>
            </div>
            <ArrowIconOne />
          </div>
          <div className={cls.title}>About Me</div>
        </Link>
      </div>

      <div className={cls.portfolio}>
        <Link className={cls.link} href={'/portfolio'}>
          <div className={cls.top}>
            <div className={cls.pretitle}>
              <span>View</span>
              <span>my projects</span>
            </div>
            <ArrowIconOne />
          </div>
          <div className={cls.title}>Portfolio</div>
        </Link>
      </div>
    </motion.section>
  )
}
