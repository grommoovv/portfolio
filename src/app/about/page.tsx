'use client'
import { motion } from 'framer-motion'
import cls from './page.module.scss'
import { PAGE_TRANSITION } from '@/constants'
import { FeatureCard } from '@/components/common'
import { aboutInfo } from '@/mock'

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
