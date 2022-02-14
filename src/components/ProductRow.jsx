function ProductRow({ name, price, inStock }) {
  const style = {
    color: 'red',
  };
  return (
    <tbody>
      <tr>
        {inStock ? <td>{name}</td> : <td style={style}>{name}</td>}
        <td>{price}</td>
      </tr>
    </tbody>
  );
}

export default ProductRow;
