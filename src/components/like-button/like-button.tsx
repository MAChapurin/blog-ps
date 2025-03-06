'use client'

import { FC, useEffect, useState } from 'react'
import { Icon } from '@/components'

import { LikeButtonProps } from './like-button.types'

import clsx from 'clsx'

import styles from './like-button.module.css'
import { patchPostLikeById } from '@/api'



export const LikeButton: FC<LikeButtonProps> = ({
	rounded = false,
	id,
	...props
}) => {

	const [isLiked, setIsLiked] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false);
	const iconSize = rounded ? 24 : 16//px

	const onClick = async () => {
		setIsDisabled(true)
		try {
			const patchData = !isLiked
			const res = await patchPostLikeById(id, patchData)
			const likeStatus = res.isLiked
			setIsLiked(likeStatus)
			console.log(res)
		} catch (e) {
			console.log(e)
		} finally {
			setIsDisabled(false)
		}
	}

	return (
		<button
			onClick={onClick}
			className={clsx(
				styles.like,
				{
					[styles.rounded]: rounded,
					[styles.isLiked]: rounded && isLiked
				}
			)
			}
			disabled={isDisabled}
			{...props}
		>
			{!rounded && <span className={styles.count}>{isLiked ? 5 : 4}</span>}
			<Icon id='like' width={iconSize} height={iconSize} />
		</button>
	)
}
