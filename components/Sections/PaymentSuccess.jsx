import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/BfRM70pDlas6Ysqg0Y8ajA";
  }, []);

  return <h2>Redirecting to WhatsApp...</h2>;
};

export default PaymentSuccess;
