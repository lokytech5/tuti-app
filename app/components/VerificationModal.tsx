import React from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

const VerificationModal = ({ isOpen, onClose}: Props) => {
  if(!isOpen) return null;
  return (
    <>
    {/* Overlay */}
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    ></div>

    {/* Modal */}
    <dialog id="my_modal_1" className="modal" open={isOpen}>
      <div className="modal-box relative bg-secondary-content">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕ {/* You can replace this with an icon like <FaTimes /> if you prefer */}
        </button>
        <h3 className="font-bold text-lg">Verify Your Email</h3>
        <p className="py-4">
          Thank you for registering! Please check your email for the verification link.
        </p>
        <div className="modal-action">
          <button
            className="btn btn-primary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  </>
  )
}

export default VerificationModal