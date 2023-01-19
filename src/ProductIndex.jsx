export function ProductIndex(props) {
  console.log(props['products'][0]);
  return (
    <div>
      <h1>All Products</h1>
      {props['products'].map((pr)=>(
        <div key={pr.id}>
          <p>Name: {pr.name}</p>
          <p>Id: {pr.id}</p>
          {/* <p>Price: {pr.price}</p>
          <p>Description: {pr.description}</p>
          <p>Supplier: {pr.supplier.name}</p> */}
          <button onClick={() => props.onShowProduct(pr)}>More info</button>
          <button onClick={()=> props.onUpdateProduct(pr)}>Update product</button>
          <hr />
        </div>
      ))}
    </div>
  );
}