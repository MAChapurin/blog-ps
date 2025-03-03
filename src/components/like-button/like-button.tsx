'use client'

import { FC } from 'react'
import { Icon } from '@/components'

import { LikeButtonProps } from './like-button.types'

import styles from './like-button.module.css'



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
