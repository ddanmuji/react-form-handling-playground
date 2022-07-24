import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '@styles/colors'

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

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const InputLabel = styled.label`
	font-size: 14px;
	color: ${colors.descriptColor};
`

const InputStyled = styled.input`
	border: none;
	border: 1px solid ${colors.lineColor};
	border-radius: 4px;
	transition: all 0.15s ease-in-out;
	padding: 8px;
	outline: none;

	&:hover {
		border: 1px solid ${colors.secondary};
	}

	&:focus {
		border: 1px solid ${colors.primary};
		box-shadow: 0 0 0 1px ${colors.secondary};
	}
`

export default Input
