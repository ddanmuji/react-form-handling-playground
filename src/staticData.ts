export enum PathTo {
	Home = '/',
	FormikOne = '/formik-one',
	FormikTwo = '/formik-two',
	ReactHookForm = '/react-hook-form'
}

export enum PathName {
	FormikOne = 'FormikOne',
	FormikTwo = 'FormikTwo',
	ReactHookForm = 'ReactHookForm'
}

export const NAV_DATAS = [
	{ id: 1, to: PathTo.FormikOne, name: PathName.FormikOne },
	{ id: 2, to: PathTo.FormikTwo, name: PathName.FormikTwo },
	{ id: 3, to: PathTo.ReactHookForm, name: PathName.ReactHookForm }
] as const

export const SIGNUP_LABAL_DATAS = [
	{ key: 'email', name: '이메일' },
	{ key: 'nickname', name: '닉네임' },
	{ key: 'password', name: '비밀번호' },
	{ key: 'passwordCheck', name: '비밀번호 확인' }
] as const

export const EMAIL_REG_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
