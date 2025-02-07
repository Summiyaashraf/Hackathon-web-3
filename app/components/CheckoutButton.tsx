"use client";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional in case there's no image
}

export default function CheckoutButton({ cartItems }: { cartItems: CartItem[] }) {
  const handleCheckout = async () => {
    try {
      console.log("Checkout Button Clicked! Sending POST request...");

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: cartItems }),
      });

      console.log("Response received:", res.status);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.url) {
        console.log("Redirecting to Stripe Checkout:", data.url);
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
}
