import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <div className="container">
      <h1>ProducTable</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
            />
          );
        })}
      </table>
    </div>
  );
}

export default ProductTable;
