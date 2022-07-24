import { FC, ReactNode } from 'react'
import { AppLayoutContainer } from './AppLayout.styled'

interface AppLayoutProps {
	children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
	<AppLayoutContainer>{children}</AppLayoutContainer>
)

export default AppLayout
