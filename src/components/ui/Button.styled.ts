import colors from '@styles/colors'
import styled from 'styled-components'

export const ButtonStyled = styled.button`
	width: 100%;
	border: none;
	padding: 8px 12px;
	color: ${colors.white};
	background-color: ${colors.secondary};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.15s ease-in-out;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: ${colors.primary};
	}
`
