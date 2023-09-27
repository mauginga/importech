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
import { Button } from 'react-bootstrap';



function ItemListContainer  ({greeting, productos}) {

  return (
    <>
      <div className = "greeting">
        <span>{greeting}</span>
      </div>
      <div className="container flex-row">
        {productos.map((item) => {
        return (
            <div>
              <Item key={item.id} prodSelec={item}/>
            </div>
          )
        })}

        <Button variant="outlined"> Elegime </Button>
      </div>
    </>
  );
};

export default ItemListContainer;