import styles from './form.module.css'

export const Form = () => {
	return (
		<form className={styles.form} action='post'>
			<input placeholder='Имя' className={styles.input} type='text' />
			<textarea
				placeholder='Комментарий'
				className={styles.textArea}
				name='text'
			></textarea>
			<button className={styles.btn} type='submit'>
				Отправить
			</button>
		</form>
	)
}
