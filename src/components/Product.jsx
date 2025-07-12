const Product = ({ imageUrl, price, name, description }) => {
  return (
    <div>
      <img src={imageUrl} alt="test" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{`₹${price}`}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;
