import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Loading from "./Loading";
// import arrayProductos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); /*desestructurar id*/
    
    /* Cargando mi array de productos de forma local
     useEffect (() => {
         const promesa = new Promise((resolve) => {
           Retardo de 2 segundos - Emular retrasos de red
           setTimeout (() => {
                 resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
             }, 2000)
         });
         promesa.then((respuesta) => {
             setItems(respuesta);
         });
     }, [id]); */

    
    // Para subir todos los productos de mi Json local al Firestore
    /* useEffect (() => {
         const db = getFirestore();
         const itemsCollection = collection(db, "items");
         arrayProductos.forEach(item => {
             addDoc(itemsCollection, item)
         });
         console.log("Se agregaron los poductos.");
     }, []); */
    
    
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => { // getDocs devuelve una coleccion, un array de objetos
          setItems(elements.docs.map(element => ({id:element.id, ...element.data()}))); //data trae todos los atributos del objeto, ... trae toda la informacion  
          setLoading(false);  
        })
    },[id]);


    return (
        < div className="container">
            {loading ? <Loading/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;


