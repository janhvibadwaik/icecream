import "./ProductCard.css";
function ProductCard({product}) {
  return (
    <div className="product-container">
                <img src={product.image} className="product-img" alt={product.title}/>
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description} </p>
                <p className="product-price">Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;