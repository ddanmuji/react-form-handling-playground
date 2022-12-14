import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '@styles/colors'

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	padding: 18px 36px;
	border-bottom: 1px solid ${colors.lineColor};
`

export const HeaderTitle = styled(Link)`
	font-size: 24px;
	font-weight: 600;
	transition: all 0.15s ease-in-out;

	&:hover {
		color: ${colors.secondary};
	}
`

export const HeaderNavGuorp = styled.nav`
	display: flex;
	align-items: center;
	gap: 20px;
`

export const HeaderNavItem = styled(Link)<{ active?: number }>`
	font-size: 16px;
	transition: all 0.15s ease-in-out;
	color: ${({ active }) => (active ? colors.primary : colors.textColor)};

	&:hover {
		color: ${colors.secondary};
	}
`
