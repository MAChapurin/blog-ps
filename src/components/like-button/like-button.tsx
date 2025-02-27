'use client'

import { FC, HTMLAttributes } from 'react'
import { Icon } from '@/components'

import styles from './like-button.module.css'

interface LikeButtonProps extends HTMLAttributes<HTMLButtonElement> {
	rounded?: boolean
}

export const LikeButton: FC<LikeButtonProps> = ({
	rounded = false,
	...props
}) => {
	return (
		<button
			onClick={() => alert('click')}
			className={`${styles.like} ${rounded ? styles.rounded : ''}`}
			{...props}
		>
			<span className={styles.count}>4</span>
			<Icon id='like' width={16} height={16} />
		</button>
	)
}
