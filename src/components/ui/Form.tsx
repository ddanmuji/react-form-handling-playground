import { FC, FormHTMLAttributes, ReactNode } from 'react'
import { FormStyled } from './Form.styled'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode
}

const Form: FC<FormProps> = ({ children, ...props }) => {
	return <FormStyled {...props}>{children}</FormStyled>
}

export default Form
