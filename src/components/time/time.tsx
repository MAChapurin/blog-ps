import { FC } from 'react'

import { TimeTextProps } from './time.types'

import styles from './time.module.css'


export const TimeText: FC<TimeTextProps> = ({
	children,
	dateTime,
	...props
}) => {
	return (
		<time className={styles.time} dateTime={dateTime} {...props}>
			{children}
		</time>
	)
}
