interface Project {
  id: number
  title: string
  stack: string[]
  description: string
  demo: string
  code: string
}

interface SocialLinks {
  id: number
  title: string
  href: string
}

interface Routes {
  id: number
  title: string
  href: string
}

export type { Project, SocialLinks, Routes }
