import { FC, InputHTMLAttributes } from 'react'
import { InputLabel, InputStyled, InputWrapper } from './Input.styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: { key: string; name: string }
}

const Input: FC<InputProps> = ({ label, ...props }) => {
	return (
		<InputWrapper>
			{label && <InputLabel htmlFor={label.key}>{label.name}</InputLabel>}
			<InputStyled id={label?.name} {...props} />
		</InputWrapper>
	)
}

export default Input
