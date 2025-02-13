import { FC, HTMLAttributes, ReactNode } from 'react'

import styles from './time.module.css'

interface TimeTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  dateTime: string;
}

export const TimeText: FC<TimeTextProps> = ({ children, dateTime, ...props }) => {
  return <time className={styles.time} dateTime={dateTime} {...props}>{children}</time>
}