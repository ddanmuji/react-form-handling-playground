import colors from '@styles/colors'
import styled from 'styled-components'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const InputLabel = styled.label`
	font-size: 14px;
	color: ${colors.descriptColor};
`

export const InputStyled = styled.input`
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
