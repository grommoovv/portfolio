'use client'
import { FC, useRef } from 'react'
import cls from './PortfolioCard.module.scss'
import { Project } from '@/types'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

interface PortfolioCardProps {
  card: Project
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ card }) => {
  const ref = useRef(null)

  const scrollYProgress: any = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  }).scrollYProgress

  const y = useTransform(scrollYProgress, [0, 0.5], [500, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const style = { y, scale, opacity }

  return (
    <>
      <motion.div className={cls.card} style={style} ref={ref}>
        <div className={cls.card_inner}>
          <div className={cls.title}>{card.title}</div>
          <div className={cls.stack}>{card.stack.join(' / ')}</div>
          <div className={cls.desc}>{card.description}</div>
          <div className={cls.abc}>
            <button className={cls.button}>
              <Link href={card.demo}>Demo</Link>
            </button>
            <button className={cls.button}>
              <Link href={card.code}>Code</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
