import { ProductIndex } from "./ProductIndex";
import {ProductNew } from "./ProductNew";
import axios from "axios";
import { useState,useEffect } from 'react';
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from './Modal';
import { ProductShow } from "./ProductShow";
import { ProductUpdate } from "./ProductUpdate";


export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductShowVisible,setIstProductShowVisible] = useState(false);
  const [isProductUpdateVisible,setIstProductUpdateVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleProductsIndex = () => {
    // console.log("handleProductIndex");
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(handleProductsIndex, []);
  const handleCreateProduct = (params, reset) => {
    // console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then(response =>{
      console.log(response.data);
      reset();
    });
  };

  const handleShowProduct = (product) => {
    // console.log("handle show PRoduct");
    setIstProductShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    setIstProductShowVisible(false);
    setIstProductUpdateVisible(false);
  };

  const handleUpdateProduct = (id, params, reset) => {
    console.log("handle Update Product!");
    setIstProductUpdateVisible(true);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      console.log(response.data);
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }            

        })
      );
      reset();
    });
    
  };

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductNew onCreateProduct={handleCreateProduct}/>
      <ProductIndex products = {products} onShowProduct = {handleShowProduct} onUpdateProduct = {handleUpdateProduct}/>
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductShow product={currentProduct}/>
      </Modal>
      <Modal show={isProductUpdateVisible} onClose={handleClose}>
        <ProductUpdate product={currentProduct}/>
      </Modal>
    </div>
  );
}