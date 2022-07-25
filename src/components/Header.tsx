import { useLocation } from 'react-router-dom'
import { NAV_DATAS } from '@src/staticData'
import {
	HeaderContainer,
	HeaderNavGuorp,
	HeaderNavItem,
	HeaderTitle
} from './Header.styled'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<HeaderContainer>
			<HeaderTitle to="/">React Form Handling Practice</HeaderTitle>
			<HeaderNavGuorp>
				{NAV_DATAS.map(({ id, name, to }) => (
					<HeaderNavItem
						key={id}
						to={to}
						active={pathname === to ? 1 : undefined}
					>
						{name}
					</HeaderNavItem>
				))}
			</HeaderNavGuorp>
		</HeaderContainer>
	)
}

export default Header
