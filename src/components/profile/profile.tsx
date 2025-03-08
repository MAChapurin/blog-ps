import { AppContext, Icon } from '@/components'
import { useContext } from 'react'

export const Profile: React.FC = () => {
	const { githubLink } = useContext(AppContext)
	return (
		<a href={githubLink} target='_blank'>
			<Icon id='github' />
		</a>
	)
}
