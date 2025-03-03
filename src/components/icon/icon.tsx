import { FC } from 'react'
import { IconProps } from './icon.types'


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
