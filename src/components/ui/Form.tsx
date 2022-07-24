import { FC, FormHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode
}

const Form: FC<FormProps> = ({ children, ...props }) => {
	return <FormStyled {...props}>{children}</FormStyled>
}

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export default Form
