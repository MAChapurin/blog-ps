import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  id: string
  width?: number
  height?: number
}
