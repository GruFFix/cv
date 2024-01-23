export interface WorkBlockProps {
  name: string
  about: string
  position: string
  years: string
  reverse?: boolean
}

export interface ProjectBlockProps {
  name: string
  whatsDone: string[]
  description?: string[]
  stack: string[]
}
