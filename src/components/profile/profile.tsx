import { AppContext, Icon } from '@/components'
import { useContext } from 'react'

import styles from './profile.module.css'

export const Profile: React.FC = () => {
	const { githubLink } = useContext(AppContext)
	return (
		<a className={styles.link} href={githubLink} target='_blank' aria-label='Перейти к исходникам на гитхабе'>
			<Icon id='github' />
		</a>
	)
}
