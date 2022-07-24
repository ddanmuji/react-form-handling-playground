import styled from 'styled-components'
import colors from '@styles/colors'

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const ErrorMsg = styled.span`
	color: ${colors.danger};
	font-size: 14px;
`
