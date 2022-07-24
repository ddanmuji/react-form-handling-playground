import AppLayout from '@components/AppLayout'
import Button from '@components/Button'
import Form from '@components/Form'
import Input from '@components/Input'

const labelData = [
	{ key: 'name', name: '이름' },
	{ key: 'nickname', name: '닉네임' },
	{ key: 'password', name: '비밀번호' },
	{ key: 'passwordCheck', name: '비밀번호 확인' }
] as const

const FormOne = () => {
	return (
		<AppLayout title="회원가입 데모">
			<Form>
				<Input label={labelData[0]} />
				<Input label={labelData[1]} />
				<Input label={labelData[2]} />
				<Input label={labelData[3]} />
				<Button>회원가입</Button>
			</Form>
		</AppLayout>
	)
}

export default FormOne
