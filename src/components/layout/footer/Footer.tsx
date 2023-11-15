import { FC } from 'react'
import cls from './Footer.module.scss'

const Footer: FC = (props) => {
  return (
    <>
      <footer className={cls.footer}>
        <div>Portfolio Website </div>
      </footer>
    </>
  )
}

export { Footer }
