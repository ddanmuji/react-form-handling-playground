import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@components/Header'
import GlobalStyle from '@styles/GlobalStyle'
import RouterConfig from './RouterConfig'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<GlobalStyle />
			<Suspense fallback={<span>Loading...</span>}>
				<RouterConfig />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
