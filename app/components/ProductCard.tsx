import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { showToast } from "./ToastNotifier";
import useCartStore from "./useCartStore";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  showDetailsButton?: boolean;
  showAddToCartButton: boolean;
  onDetailsClick?: () => void;
}

const ProductCard = (product: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCartClick = () => {
    addToCart({
      _id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    showToast("Item added to cart!", "success");
  };

  return (
    <div className="card card-compact w-72 bg-netural-100 shadow-2xl">
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={284}
          height={150}
          layout="responsive"
        />
      </figure>

      <div className="flex-grow flex flex-col justify-center items-center p-2">
        <div className="grid grid-cols-[1fr,auto] items-center gap-4 w-full mb-2">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">#{product.price.toLocaleString()}</p>
        </div>
        <p className="product-description">{product.description}</p>
      </div>

      <div className="flex justify-center items-center p-4 space-x-4 w-full">
        {product.showDetailsButton ? (
          <div className="flex justify-between items-center w-full">
            <button
              className="btn btn-primary w-1/2 "
              onClick={product.onDetailsClick}
            >
              Details
            </button>
            {product.showAddToCartButton && (
              <button
                className="btn btn-accent rounded-full w-1/6 text-neutral-100 hover:bg-red-500 transition-colors duration-300 p-2 group"
                onClick={handleAddToCartClick}
              >
                <FaShoppingCart className="group-hover:text-white" size={20} />
              </button>
            )}
          </div>
        ) : (
          product.showAddToCartButton && (
            <button
              className="btn btn-accent text-neutral-100 hover:bg-red-500 transition-colors duration-300"
              onClick={handleAddToCartClick}
            >
              Add to cart
              <FaShoppingCart className="mr-2" size={15} />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
