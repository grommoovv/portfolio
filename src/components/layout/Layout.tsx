'use client'
import { FC, PropsWithChildren, useEffect } from 'react'
import cls from './Layout.module.scss'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { usePathname } from 'next/navigation'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()

  // useEffect(() => {
  //   const __layout = document.getElementById('__layout')!
  //   if (pathname === '/') {
  //     __layout.style.height = '100vh'
  //   }

  //   return () => {
  //     __layout.style.height = ''
  //   }
  // }, [pathname])

  return (
    <div id='__layout' className={cls.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }
