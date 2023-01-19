export function ProductUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () =>event.target.reset());

  };
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" name= "name"/></p>
        <p>Price: <input type="text" name= "price"/></p>
        <p>Description: <input type="text" name= "description"/></p>
        <p>Supplier_id: <input type="text" name= "supplier_id"/></p>
        <p>Inventory: <input type="text" name= "inventory"/></p>
        <button type="submit">Update product</button>
      </form>
    </div>
  );
}