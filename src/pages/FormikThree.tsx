import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik'
import * as Yup from 'yup'

import AppLayout from '@components/AppLayout'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import { ErrorMsg } from '@styles/common.styled'
import { SIGNUP_LABAL_DATAS } from '@src/staticData'

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

const FormikThree = () => {
	const onSubmit = (data: typeof initialValues) => {
		alert('회원가입 시도')
		console.log('submit!', data)
	}

	const formikProps = { initialValues, validationSchema, onSubmit }

	return (
		<AppLayout title="회원가입 데모 with formik component">
			<Formik {...formikProps}>
				<Form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<div>
						<Field name="email">
							{(props: FieldProps<string>) => (
								<>
									<Input
										type="email"
										label={SIGNUP_LABAL_DATAS[0]}
										{...props.field}
									/>
									<ErrorMessage component={ErrorMsg} name="email" />
								</>
							)}
						</Field>
					</div>
					<div>
						<Field name="nickname">
							{(props: FieldProps<string>) => (
								<>
									<Input
										type="text"
										label={SIGNUP_LABAL_DATAS[1]}
										{...props.field}
									/>
									<ErrorMessage component={ErrorMsg} name="nickname" />
								</>
							)}
						</Field>
					</div>
					<div>
						<Field name="password">
							{(props: FieldProps<string>) => (
								<>
									<Input
										type="password"
										label={SIGNUP_LABAL_DATAS[2]}
										{...props.field}
									/>
									<ErrorMessage component={ErrorMsg} name="password" />
								</>
							)}
						</Field>
					</div>
					<div>
						<Field name="passwordCheck">
							{(props: FieldProps<string>) => (
								<>
									<Input
										type="password"
										label={SIGNUP_LABAL_DATAS[3]}
										{...props.field}
									/>
									<ErrorMessage component={ErrorMsg} name="passwordCheck" />
								</>
							)}
						</Field>
					</div>
					<Button type="submit">회원가입</Button>
				</Form>
			</Formik>
		</AppLayout>
	)
}

export default FormikThree
