export function ProductShow(props) {
  // console.log("Product show");
  return (
    <div>
      <h1>Name: {props.product.name}</h1>
      <p>Price: {props.product.price}</p>
      <p>Inventory: {props.product.inventory}</p>
      <p>Supplier: {props.product.supplier.name}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}