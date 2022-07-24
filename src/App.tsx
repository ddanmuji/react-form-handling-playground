import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '@styles/GlobalStyle'
import RouterConfig from './RouterConfig'

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Suspense fallback={<span>Loading...</span>}>
				<RouterConfig />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
