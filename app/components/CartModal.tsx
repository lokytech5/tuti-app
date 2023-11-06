import React from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import useCartStore from "./useCartStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: Props) => {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (!isOpen) return null;

  const onCheckOut = () => {
    console.log("checkout");
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box relative bg-secondary-content">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <h3 className="font-bold text-lg">Your Cart</h3>
          {items.length === 0 && <p className="py-4">Your cart is empty.</p>}
          {items.map((item) => (
            <div
              key={item.product._id}
              className="flex flex-col md:flex-row items-center justify-between my-4"
            >
              <div className="flex items-center w-full">
                {" "}
                {/* Ensure full width */}
                {/* Responsive image */}
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  {" "}
                  {/* Flex-grow ensures the div takes up available space */}
                  <div className="font-bold">{item.product.name}</div>
                  <div className="text-sm">Qty: {item.quantity}</div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-lg font-bold">${item.product.price}</span>
                <button
                  className="btn btn-xs btn-error btn-circle ml-2"
                  onClick={() => removeFromCart(item.product._id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
          <div className="modal-action mt-4 flex flex-col md:flex-row justify-center md:justify-end">
            <button
              className="btn btn-primary self-center md:self-auto"
              onClick={onCheckOut}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
