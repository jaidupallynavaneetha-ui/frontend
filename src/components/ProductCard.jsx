function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', borderRadius: '8px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{product.title.slice(0, 9)}</h3>
      <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#e47911' }}>${product.price}</p>
    </div>
  );
}

export default ProductCard;
