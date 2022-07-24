import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ButtonStyled } from './Button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<ButtonStyled {...props}>{children}</ButtonStyled>
)

export default Button
