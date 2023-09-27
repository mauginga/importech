import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Navigation from "./routes/Navigation";
import { useEffect, useState } from "react";

function App() {

  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    return new Promise ((resolve, reject) => {
      resolve(listaProductos)
    })
  }

  useEffect(() => {
    getProductos()
    .then((res) => {
      setProductos(res)
    })
  }, [])


  return(
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ItemListContainer greeting = {"Bienvenidos a ImporTech"} productos ={productos}/>
        <Navigation />
      </main>
    </>
  );
}

export default App;

// debe ser jsx siempre
// los componentes en su archivo, se escriben con Mayuscula
// el componente es una funcion que tambien su nombre inicia con May
// la funcion del componente solo puede devolver un compo de HTML
// no puede devolver 2, solo uno, un div puede contener varios, pero solo 1 main
// Ciclos de vida de un componente
// 1. Se monta el componente.
// 2. Se actualiza
// 3. el Componente se desmonta

