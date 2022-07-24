import { useLocation } from 'react-router-dom'
import {
	HeaderContainer,
	HeaderNavGuorp,
	HeaderNavItem,
	HeaderTitle
} from './Header.styled'

const linkDatas = [
	{ id: 1, to: '/', name: 'Form One' },
	{ id: 2, to: '/two', name: 'Form Two' },
	{ id: 3, to: '/three', name: 'Form Three' }
] as const

const Header = () => {
	const { pathname } = useLocation()

	return (
		<HeaderContainer>
			<HeaderTitle to="/">Formik-Practice</HeaderTitle>
			<HeaderNavGuorp>
				{linkDatas.map(({ id, name, to }) => (
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
