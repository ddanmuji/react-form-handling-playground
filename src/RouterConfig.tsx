import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { PathTo } from './staticData'

const FormikOne = lazy(() => import('@pages/FormikOne'))
const FormikTwo = lazy(() => import('@pages/FormikTwo'))
const ReactHookForm = lazy(() => import('@pages/ReactHookForm'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: PathTo.Home, element: <Navigate to={PathTo.FormikOne} /> },
		{ path: PathTo.FormikOne, element: <FormikOne /> },
		{ path: PathTo.FormikTwo, element: <FormikTwo /> },
		{ path: PathTo.ReactHookForm, element: <ReactHookForm /> }
	])

	return routes
}

export default RouterConfig
