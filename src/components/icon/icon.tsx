import { FC, SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	id: string
	width?: number
	height?: number
}

export const Icon: FC<IconProps> = ({
	id,
	width = 24,
	height = 24,
	...props
}) => (
	<svg width={width} height={height} {...props}>
		<use xlinkHref={`./sprite.svg#${id}`} />
	</svg>
)
