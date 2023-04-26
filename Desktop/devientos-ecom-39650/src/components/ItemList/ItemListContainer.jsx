import { useState, useEffect } from "react";

import {
  products,
  getProducts,
  getProductsByCategory,
} from "../../productsMock";

import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
