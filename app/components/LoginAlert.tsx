import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
}

const LoginAlert = ({ onClose }: Props) => {
  const router = useRouter();

  const handleLogin = () => {
    onClose();
    router.push("/loginUser");
  };

  return (
    <div className="alert">
      <p>Please log in to proceed to checkout.</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Log In
      </button>
      <button className="btn btn-secondary" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default LoginAlert;
