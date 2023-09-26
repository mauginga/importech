// /* eslint-disable react/prop-types */
// import "./ItemListContainer.css";

// function ItemListContainer(props) {
//   return (
//     <div>
//       <h1 className="greeting">{props.greeting}</h1>
//     </div>
//   );
// }

// export default ItemListContainer;
import Item from "../Item/Item";
import "./ItemListContainer.css";
import { Button } from '@mui/material';



const ItemListContainer = ({router, handleConsole}) => {

  return (
    <div className="container">
      {router.map((ruta) => {
      return (
        <Item key={ruta.id} prodSelec={ruta}/>
        )
      })}

      <Button variant="outlined" onClick={()=> handleConsole()}> Elegime </Button>
    </div>
  );
};

export default ItemListContainer;