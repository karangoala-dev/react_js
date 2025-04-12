import "../index.css";

const ProductCard = ({ title, image }) => {
  return (
    <div className="product-card">
      <span>{title}</span>
      <img className="img" src={image} alt="{title}" />
    </div>
  );
};

export default ProductCard;
