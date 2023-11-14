import { FC, useRef } from 'react'
import cls from './FeatureCard.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FeatureCardProps {
  number?: string
  title: string
  description: string
}

const FeatureCard: FC<FeatureCardProps> = ({ number, title, description }) => {
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
    <motion.div className={cls.card} style={style} ref={ref}>
      <div className={cls.title}>
        {number && <span className={cls.number}>{number}</span>}
        <span className={cls.text}>{title}</span>
      </div>
      <p className={cls.description}>{description}</p>
    </motion.div>
  )
}

export { FeatureCard }
