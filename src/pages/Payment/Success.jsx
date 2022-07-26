import { useEffect } from "react";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";

const Success = () => {
  let { clearCart } = useGlobalCartInfoContext();
  /**
   * if the user come to payment success page we will clear the cart
   */
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h6 className="text-success">Payment successful!</h6>
      </div>
    </div>
  );
};

export default Success;
