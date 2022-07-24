import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const FormOne = lazy(() => import('@pages/FormOne'))
const FormTwo = lazy(() => import('@pages/FormTwo'))
const FormThree = lazy(() => import('@pages/FormThree'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <FormOne /> },
		{ path: '/two', element: <FormTwo /> },
		{ path: '/three', element: <FormThree /> }
	])

	return routes
}

export default RouterConfig
