import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Item = ({ prodSelec }) => {
  return (
    <div>
        <Card className='card'>
            <Card.Img><img style={{width:"200px", height:"120px"}} src={prodSelec.imgUrl} /></Card.Img>
                <Card.Body>
                    <h1>{prodSelec.nombre}</h1>
                    <p>{prodSelec.descripcion}</p>
                    <p>{prodSelec.precio}</p>
                    <Link to={`/product/${prodSelec.id}`}>Ver detalle</Link>
                </Card.Body>    
        </Card>
    </div>
  );
};

export default Item;