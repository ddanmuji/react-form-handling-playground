import { Formik } from 'formik'
import AppLayout from '@components/AppLayout'
import Button from '@components/ui/Button'
import Form from '@components/ui/Form'
import Input from '@components/ui/Input'
import { ErrorMsg } from '@components/ui/Form.styled'

const labelData = [
	{ key: 'email', name: '이메일' },
	{ key: 'nickname', name: '닉네임' },
	{ key: 'password', name: '비밀번호' },
	{ key: 'passwordCheck', name: '비밀번호 확인' }
] as const

const initialValues = {
	email: '',
	nickname: '',
	password: '',
	passwordCheck: ''
}

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const FormOne = () => {
	const onSubmit = (data: typeof initialValues) => {
		console.log(data.email)
		console.log(data.nickname)
		console.log(data.password)
		console.log(data.passwordCheck)
	}

	return (
		<AppLayout title="회원가입 데모">
			<Formik
				initialValues={initialValues}
				validate={values => {
					const errors: any = {}

					if (!values.email) errors.email = '이메일은 필수입니다!'
					else if (!emailRegExp.test(values.email))
						errors.email = '이메일 형식이 아닙니다!'
					if (!values.nickname) errors.nickname = '닉네임은 필수입니다!'
					if (!values.password) errors.password = '비밀번호는 필수입니다!'
					if (!values.passwordCheck)
						errors.passwordCheck = '비밀번호확인은 필수입니다!'

					return errors
				}}
				onSubmit={onSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					// handleBlur,
					handleSubmit
					// isSubmitting
				}) => (
					<Form onSubmit={handleSubmit}>
						<div>
							<Input
								type="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								label={labelData[0]}
							/>
							{errors.email && touched.email && (
								<ErrorMsg>{errors.email}</ErrorMsg>
							)}
						</div>
						<div>
							<Input
								type="text"
								name="nickname"
								value={values.nickname}
								onChange={handleChange}
								label={labelData[1]}
							/>
							{errors.nickname && touched.nickname && (
								<ErrorMsg>{errors.nickname}</ErrorMsg>
							)}
						</div>
						<div>
							<Input
								type="password"
								name="password"
								value={values.password}
								onChange={handleChange}
								label={labelData[2]}
							/>
							{errors.password && touched.password && (
								<ErrorMsg>{errors.password}</ErrorMsg>
							)}
						</div>
						<div>
							<Input
								type="password"
								name="passwordCheck"
								value={values.passwordCheck}
								onChange={handleChange}
								label={labelData[3]}
							/>
							{errors.passwordCheck && touched.passwordCheck && (
								<ErrorMsg>{errors.passwordCheck}</ErrorMsg>
							)}
						</div>
						<Button type="submit">회원가입</Button>
					</Form>
				)}
			</Formik>
		</AppLayout>
	)
}

export default FormOne
