'use client'
import { motion } from 'framer-motion'
import cls from './page.module.scss'
import { PAGE_TRANSITION } from '@/constants'
import { FeatureCard } from '@/components/common'
import { projects } from '@/mock'
import { PortfolioCard } from '@/components/common/PortfolioCard'

export default function Portfolio() {
  return (
    <motion.section
      className={cls.section}
      variants={PAGE_TRANSITION}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className={cls.inner}>
        <FeatureCard
          title='# Project Cases'
          description='Here you can explore my projects and evaluate the code quality.'
        />
        <div className={cls.showcase}>
          {projects.map((proj) => (
            <PortfolioCard card={proj} key={`card-${proj.id}`} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
