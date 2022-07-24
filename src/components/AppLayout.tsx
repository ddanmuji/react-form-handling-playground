import { FC, ReactNode } from 'react'
import { AppLayoutContainer, AppLayoutTitle } from './AppLayout.styled'

interface AppLayoutProps {
	children: ReactNode
	title?: string
}

const AppLayout: FC<AppLayoutProps> = ({ children, title }) => (
	<AppLayoutContainer>
		{title && <AppLayoutTitle>{title}</AppLayoutTitle>}
		{children}
	</AppLayoutContainer>
)

export default AppLayout
