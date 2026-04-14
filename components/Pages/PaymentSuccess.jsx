import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [status, setStatus] = useState("Checking payment...");

  useEffect(() => {
    const verify = async () => {
      const orderId = localStorage.getItem("orderId");

      console.log("ORDER ID:", orderId);

      if (!orderId) {
        setStatus("Invalid payment ❌");
        setTimeout(() => {
          window.location.href = "/powershell";
        }, 2000);
        return;
      }

      // ⏳ wait before checking
      await new Promise((res) => setTimeout(res, 3000));

      try {
        const res = await fetch(
          `https://api.neeltechnologies.com/api/powershell/verify-payment?orderId=${orderId}`,
        );

        const data = await res.json();

        console.log("VERIFY RESPONSE:", data);

        // ✅ SUCCESS
        if (data.status === "COMPLETED") {
          setStatus("Payment Successful ✅");

          localStorage.removeItem("orderId");

          setTimeout(() => {
            window.location.href =
              "https://chat.whatsapp.com/BfRM70pDlas6Ysqg0Y8ajA?mode=gi_t";
          }, 1500);

          return;
        }

        // ❌ FAILED / CANCELLED
        if (data.status === "FAILED") {
          setStatus("Payment Failed or Cancelled ❌");

          localStorage.removeItem("orderId");

          setTimeout(() => {
            window.location.href = "/powershell";
          }, 2000);

          return;
        }

        // ⏳ STILL PENDING
        setStatus("Payment Pending ⏳ (please wait...)");

        // 🔁 retry after 2 sec
        setTimeout(verify, 2000);
      } catch (err) {
        console.error(err);
        setStatus("Error verifying payment ❌");

        setTimeout(() => {
          window.location.href = "/powershell";
        }, 2000);
      }
    };

    verify();
  }, []);

  return <h1>{status}</h1>;
};

export default PaymentSuccess;
