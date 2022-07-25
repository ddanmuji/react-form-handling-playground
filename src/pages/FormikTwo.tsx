import { useFormik } from 'formik'
import * as Yup from 'yup'

import { SIGNUP_LABAL_DATAS } from '@src/staticData'
import AppLayout from '@components/AppLayout'
import Button from '@components/ui/Button'
import Form from '@components/ui/Form'
import Input from '@components/ui/Input'
import { ErrorMsg } from '@styles/common.styled'

const initialValues = {
	email: '',
	nickname: '',
	password: '',
	passwordCheck: ''
}

const validationSchema = Yup.object({
	email: Yup.string()
		.email('이메일 형식이 아닙니다!')
		.required('이메일은 필수 입니다!'),
	nickname: Yup.string()
		.min(3, '3자 이상 입력해주세요')
		.required('닉네임은 필수 입니다!'),
	password: Yup.string()
		.min(5, '5자 이상 입력해주세요')
		.required('비밀번호는 필수 입니다!'),
	passwordCheck: Yup.string()
		.oneOf([Yup.ref('password'), null], '비밀번호를 확인해주세요!')
		.required('비밀번호 확인은 필수 입니다!')
})

const FormikTwo = () => {
	const onSubmit = (data: typeof initialValues) => {
		alert('회원가입 시도')
		console.log('submit!', data)
	}

	const { errors, touched, isSubmitting, getFieldProps, handleSubmit } =
		useFormik({ initialValues, validationSchema, onSubmit })

	return (
		<AppLayout title="회원가입 데모 with formik hook">
			<Form onSubmit={handleSubmit}>
				<div>
					<Input
						type="email"
						label={SIGNUP_LABAL_DATAS[0]}
						// value={formik.values.email}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...getFieldProps('email')}
					/>
					{errors.email && touched.email && <ErrorMsg>{errors.email}</ErrorMsg>}
				</div>
				<div>
					<Input
						type="text"
						label={SIGNUP_LABAL_DATAS[1]}
						{...getFieldProps('nickname')}
					/>
					{errors.nickname && touched.nickname && (
						<ErrorMsg>{errors.nickname}</ErrorMsg>
					)}
				</div>
				<div>
					<Input
						type="password"
						label={SIGNUP_LABAL_DATAS[2]}
						{...getFieldProps('password')}
					/>
					{errors.password && touched.password && (
						<ErrorMsg>{errors.password}</ErrorMsg>
					)}
				</div>
				<div>
					<Input
						type="password"
						label={SIGNUP_LABAL_DATAS[3]}
						{...getFieldProps('passwordCheck')}
					/>
					{errors.passwordCheck && touched.passwordCheck && (
						<ErrorMsg>{errors.passwordCheck}</ErrorMsg>
					)}
				</div>
				<Button type="submit" disabled={isSubmitting}>
					회원가입
				</Button>
			</Form>
		</AppLayout>
	)
}

export default FormikTwo
