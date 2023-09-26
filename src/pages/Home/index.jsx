import { Link } from "react-router-dom"

const Home = () => {
    return (
        <h1>
            Hola soy HOme <br/>
            ir a <Link to ={'/checkout'}>Checkout</Link> <br/>
            ir a <Link to ={'/product/1234'}>Product</Link> <br/>

        </h1>
    )
}
export default Home
