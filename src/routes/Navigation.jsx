import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { CheckoutPage, HomePage, ItemDetailPage} from '../pages'

const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>

        },
        {
            path: '/product/:idProduct',
            element: <ItemDetailPage />
        },
        {
            path: '/checkout',
            element: <CheckoutPage />
        }
    ])
const Navigation = () => {
    return (
        <RouterProvider router={routes} />
    )
}
export default Navigation