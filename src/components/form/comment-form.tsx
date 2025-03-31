'use client';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { postCommentByPostId } from '@/api';
import { CommentFormValues } from './comment-form.types';

import styles from './comment-form.module.css';

export const CommentForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm<CommentFormValues>()

	const ref = useRef<HTMLFormElement>(null)
	const pathname = usePathname()

	const onSubmit: SubmitHandler<CommentFormValues> = async (data) => {
		setIsLoading(true)
		try {
			const res = await postCommentByPostId(pathname, { postId: parseInt(pathname), name: data.name, body: data.comment })
			console.log('Ответ с json-placeholder =>', res)
			ref.current?.reset()
			setIsSuccess(true)
			setTimeout(() => {
				setIsSuccess(false)
			}, 5000)
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}

	const onError: SubmitErrorHandler<CommentFormValues> = data => {
		console.log(data)
	}

	const nameErrorsMessage = errors.name?.message
	const nameTooShortMessage = errors.name?.type === 'minLength' && 'Имя слишком короткое'
	const nameTooLongMessage = errors.name?.type === 'maxLength' && 'Имя слишком длинное'
	const commentErrorsMessage = errors.comment?.message

	const isDisabled = nameErrorsMessage || nameTooShortMessage || nameTooLongMessage || commentErrorsMessage || isLoading

	return (
		<form ref={ref} className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
			<label htmlFor="text" className={styles.inputLabel}>
				<input
					aria-label='Поле ввода имени'
					aria-invalid={errors.name ? true : false}
					placeholder='Имя'
					className={styles.input}
					type='text'
					{...register('name', { required: 'Укажите Ваше имя', minLength: 2, maxLength: 16 })} />
				<p className={styles.inputMessage} role="alert">{nameErrorsMessage || nameTooShortMessage || nameTooLongMessage}</p>
			</label>
			<label htmlFor="text" className={styles.inputLabel}>
				<textarea
					aria-label='Поле ввода комментария'
					aria-invalid={errors.comment ? true : false}
					placeholder='Комментарий'
					className={styles.textArea}
					{...register('comment', { required: 'Введите ваш комментарий' })}
				/>
				<p className={styles.textAreaMessage} role="alert">{commentErrorsMessage}</p>
			</label>
			<button aria-label='Отправить комментарий' className={styles.btn} type='submit' disabled={!!isDisabled}>
				Отправить
			</button>
			{isSuccess && <div className={styles.successMessage}>
				<div className={styles.successMessage__wrap}>
					<p role='alert'>Готово! Комментарий будет добавлен после прохождения модерации</p>
					<button aria-label="Закрыть уведомление об успешной отправке" onClick={() => setIsSuccess(false)} className={styles.btn} type='button'>OK</button>
				</div>
			</div>}
		</form>
	)
}
