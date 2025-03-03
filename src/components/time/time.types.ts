import { HTMLAttributes, ReactNode } from "react"

export interface TimeTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  dateTime: string
}