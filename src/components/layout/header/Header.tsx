import { FC } from 'react'
import cls from './Header.module.scss'
import { NavLink } from '@/components/common/NavLink/NavLink'

const navLinks = [
  { title: 'Home', URL: '/' },
  { title: 'About', URL: '/about' },
  { title: 'Portfolio', URL: '/portfolio' },
]

const Header: FC = () => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.wrap}>
          <div className={cls.label}>Frontend Developer</div>
          <nav className={cls.nav}>
            {navLinks.map((n) => (
              <NavLink link={n} key={n.title} />
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

export { Header }
