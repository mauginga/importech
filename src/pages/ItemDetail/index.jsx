import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetail = () => {
        const params = useParams()

        useEffect(()=> {
            console.log(params)
        }, [])
    return (
        <h1>
            ItemDetail <br/>
            ir a <Link to ={'/'}>Home</Link> <br/>
        </h1>
    )
}
export default ItemDetail
