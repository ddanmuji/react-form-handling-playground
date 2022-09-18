import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from '@components/ui/Spinner'
import Header from '@components/Header'
import GlobalStyle from '@styles/GlobalStyle'
import RouterConfig from './RouterConfig'
import '@with-me/style/dist/global.css'
import { Button } from '@with-me/ui'

const App = () => {
	return (
		<BrowserRouter>
			<Button>test</Button>
			<GlobalStyle />
			<Header />
			<Suspense fallback={<Spinner />}>
				<RouterConfig />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
