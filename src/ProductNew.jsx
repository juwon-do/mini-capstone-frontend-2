import axios from 'axios';
export function ProductNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () =>event.target.reset());

  };
  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" name= "name"/></p>
        <p>Price: <input type="text" name= "price"/></p>
        <p>Description: <input type="text" name= "description"/></p>
        <p>Supplier_id: <input type="text" name= "supplier_id"/></p>
        <p>Inventory: <input type="text" name= "inventory"/></p>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}