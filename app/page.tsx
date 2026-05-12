"use client";

import { useState, useEffect } from "react";

const syrups = [
  "No Syrup",
  "Caramel",
  "Hazelnut",
  "Vanilla",
  "Brown Sugar",
];

const menuItems = [
  { id: 1, category: "Burgers", name: "Crispy Chicken Burger & Chips", price: 25 },

  { id: 43, category: "Burger Roll", name: "Double Bacon Egg Cheese", price: 20 },
  { id: 44, category: "Burger Roll", name: "Double Bacon Cheese Onion", price: 20 },
  { id: 45, category: "Burger Roll", name: "Double Ham Cheese", price: 20 },
  { id: 46, category: "Burger Roll", name: "Double Ham Cheese Onion", price: 20 },

  { id: 47, category: "Omelette", name: "Chicken Cheese Omelette", price: 15 },
  { id: 48, category: "Omelette", name: "Bacon Cheese Omelette", price: 15 },
  { id: 49, category: "Omelette", name: "Ham Cheese Omelette", price: 15 },
  { id: 50, category: "Omelette", name: "Rotty Omelette", price: 20 },
  { id: 51, category: "Omelette", name: "Lot Omelette", price: 20 },

  { id: 2, category: "Rotty Wrap", name: "Chicken Wrap", price: 23 },
  { id: 3, category: "Rotty Wrap", name: "Bacon Wrap", price: 23 },

  { id: 4, category: "Signature Rotty (4 PCS)", name: "Crispy Rotty With Curry Dip", price: 12 },
  { id: 5, category: "Signature Rotty (4 PCS)", name: "Chocolate Rotty", price: 12 },

  { id: 6, category: "Fried Rice & Noodles", name: "Chicken Rice", price: 12 },
  { id: 7, category: "Fried Rice & Noodles", name: "Chicken Spicy Rice", price: 12 },
  { id: 8, category: "Fried Rice & Noodles", name: "Extra Chicken Rice", price: 17 },
  { id: 9, category: "Fried Rice & Noodles", name: "Egg Rice", price: 12 },

  { id: 10, category: "Fried Rice & Noodles", name: "Chicken Noodles", price: 12 },
  { id: 11, category: "Fried Rice & Noodles", name: "Chicken Spicy Noodles", price: 12 },
  { id: 12, category: "Fried Rice & Noodles", name: "Extra Chicken Noodles", price: 17 },
  { id: 13, category: "Fried Rice & Noodles", name: "Egg Noodles", price: 12 },

  { id: 14, category: "Snacks", name: "Fries", price: 10 },
  { id: 15, category: "Snacks", name: "Chicken Nuggets", price: 10 },

  { id: 16, category: "Milkshakes", name: "Strawberry Milkshake", price: 20 },
  { id: 17, category: "Milkshakes", name: "Chocolate Milkshake", price: 20 },
  { id: 18, category: "Milkshakes", name: "Oreo Milkshake", price: 20 },
  { id: 19, category: "Milkshakes", name: "Oreo Strawberry Milkshake", price: 20 },
  { id: 20, category: "Milkshakes", name: "Banana Milkshake", price: 20 },
  { id: 21, category: "Milkshakes", name: "Coffee Milkshake", price: 20 },
  { id: 22, category: "Milkshakes", name: "Mocha Milkshake", price: 20 },
  { id: 23, category: "Milkshakes", name: "Vanilla Biscoff Milkshake", price: 20 },

  { id: 24, category: "Protein Shakes", name: "Strawberry Protein", price: 25 },
  { id: 25, category: "Protein Shakes", name: "Chocolate Protein", price: 25 },
  { id: 26, category: "Protein Shakes", name: "Oreo Protein", price: 25 },
  { id: 27, category: "Protein Shakes", name: "Oreo Strawberry Protein", price: 25 },
  { id: 28, category: "Protein Shakes", name: "Banana Protein", price: 25 },
  { id: 29, category: "Protein Shakes", name: "Coffee Protein", price: 25 },
  { id: 30, category: "Protein Shakes", name: "Mocha Protein", price: 25 },
  { id: 31, category: "Protein Shakes", name: "Vanilla Biscoff Protein", price: 25 },

  { id: 32, category: "Fresh Juice", name: "Orange Juice", price: 10 },
  { id: 33, category: "Fresh Juice", name: "Apple Juice", price: 10 },
  { id: 34, category: "Fresh Juice", name: "Watermelon Juice", price: 10 },

  { id: 35, category: "Non-Coffee", name: "Milo", price: 12, type: ["Hot", "Iced"] },
  { id: 36, category: "Coffee", name: "Cappuccino", price: 12, type: ["Hot", "Iced"], syrup: true },
  { id: 37, category: "Coffee", name: "Americano", price: 12, type: ["Hot", "Iced"], syrup: true },
  { id: 38, category: "Non-Coffee", name: "Chocolate", price: 12, type: ["Hot", "Iced"] },
  { id: 39, category: "Non-Coffee", name: "Thai Milk Tea", price: 12, type: ["Hot", "Iced"] },
  { id: 40, category: "Coffee", name: "Latte", price: 12, type: ["Hot", "Iced"], syrup: true },
  { id: 41, category: "Coffee", name: "Mocha", price: 12, type: ["Hot", "Iced"], syrup: true },
  { id: 42, category: "Coffee", name: "Extra Shot Coffee", price: 14, type: ["Hot", "Iced"], syrup: true },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Home");
  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState<any[]>([]);

  const [selectedType, setSelectedType] = useState<any>({});
  const [selectedSyrup, setSelectedSyrup] = useState<any>({});
  const [extraChicken, setExtraChicken] = useState<any>({});
  const [spicyOption, setSpicyOption] = useState<any>({});
  const [mozzarellaOption, setMozzarellaOption] = useState<any>({});
  const [curryOption, setCurryOption] = useState<any>({});
  const [extraBurgerChicken, setExtraBurgerChicken] = useState<any>({});

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("Pickup");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const categories = [
    "Home",
    "Western",
    "Local Food / Fusion",
    "Coffee",
    "Non-Coffee",
  ];

  const addToCart = (item: any) => {
    if (item.type && !selectedType[item.id]) {
      alert("Please select Hot or Iced");
      return;
    }

    const syrupChoice = selectedSyrup[item.id] || "No Syrup";

    const syrupPrice = syrupChoice !== "No Syrup" ? 3 : 0;
    const spicyPrice = spicyOption[item.id] ? 1 : 0;
    const mozzarellaPrice = mozzarellaOption[item.id] ? 3 : 0;
    const curryPrice = curryOption[item.id] ? 5 : 0;
    const burgerExtraPrice = extraBurgerChicken[item.id] ? 6 : 0;

    const finalPrice =
      item.price +
      syrupPrice +
      spicyPrice +
      mozzarellaPrice +
      curryPrice +
      burgerExtraPrice;

    const finalItem = {
      ...item,
      quantity: 1,
      selectedDrinkType: selectedType[item.id],
      selectedSyrup: syrupChoice,
      extraChicken: extraChicken[item.id] || false,
      spicy: spicyOption[item.id] || false,
      mozzarella: mozzarellaOption[item.id] || false,
      curry: curryOption[item.id] || false,
      extraBurgerChicken: extraBurgerChicken[item.id] || false,
      finalPrice,
    };

    setCart([...cart, finalItem]);
  };

  const increaseQty = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQty = (index: number) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.finalPrice || 0) * (item.quantity || 1),
    0
  );

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <img
            src="/logo.jpeg"
            className="w-40 mx-auto animate-pulse"
          />

          <p className="text-[#c8a96b] mt-6 uppercase tracking-[0.3em]">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <section className="bg-[#f5ede3]">
        <img
          src="/hero-banner.jpeg"
          alt="Mamasan Scorpion"
          className="w-full h-auto"
        />
      </section>

      <div className="sticky top-0 z-50 bg-black border-b border-[#c8a96b]">

        <div className="flex items-center gap-4 px-5 py-4">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#c8a96b] text-3xl"
          >
            ☰
          </button>

          <h2 className="text-[#c8a96b] font-black text-xl">
            MENU
          </h2>

        </div>

      </div>

    </main>
  );
}