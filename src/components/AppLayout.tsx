import { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
	AppLayoutContainer,
	AppLayoutTitle,
	HeaderContainer,
	HeaderNavGuorp,
	HeaderNavItem,
	HeaderTitle
} from './AppLayout.styled'

const linkDatas = [
	{ id: 1, to: '/', name: 'Form One' },
	{ id: 2, to: '/two', name: 'Form Two' },
	{ id: 3, to: '/three', name: 'Form Three' }
] as const

interface AppLayoutProps {
	children: ReactNode
	title?: string
}

const AppLayout: FC<AppLayoutProps> = ({ children, title }) => {
	const { pathname } = useLocation()

	return (
		<>
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
			<AppLayoutContainer>
				{title && <AppLayoutTitle>{title}</AppLayoutTitle>}
				{children}
			</AppLayoutContainer>
		</>
	)
}

export default AppLayout
