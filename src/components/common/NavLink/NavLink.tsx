'use client'
import { FC } from 'react'
import cls from './NavLink.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavLinkProps {
  link: {
    title: string
    URL: string
  }
}

const NavLink: FC<NavLinkProps> = ({ link: { title, URL } }) => {
  const pathname = usePathname()

  return (
    <Link className={`${cls.link} ${pathname === URL && `${cls.active}`}`} href={URL}>
      <span>{title}</span>
    </Link>
  )
}

export { NavLink }
