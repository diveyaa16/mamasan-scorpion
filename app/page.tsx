"use client";

import { useEffect, useState } from "react";

const syrups = [
  "Caramel",
  "Hazelnut",
  "Vanilla",
  "Brown Sugar",
];

const menuItems = [

  // BURGERS
  {
    id: 1,
    category: "Burgers",
    name: "Crispy Chicken Burger & Chips",
    price: 25,
  },

  // BURGER ROLL
  {
    id: 2,
    category: "Burger Roll",
    name: "Double Bacon Egg Cheese",
    price: 20,
  },

  {
    id: 3,
    category: "Burger Roll",
    name: "Double Bacon Cheese Onion",
    price: 20,
  },

  {
    id: 4,
    category: "Burger Roll",
    name: "Double Ham Cheese",
    price: 20,
  },

  {
    id: 5,
    category: "Burger Roll",
    name: "Double Ham Cheese Onion",
    price: 20,
  },

  // OMELETTE
  {
    id: 6,
    category: "Omelette",
    name: "Chicken Cheese Omelette",
    price: 15,
  },

  {
    id: 7,
    category: "Omelette",
    name: "Bacon Cheese Omelette",
    price: 15,
  },

  {
    id: 8,
    category: "Omelette",
    name: "Ham Cheese Omelette",
    price: 15,
  },

  {
    id: 9,
    category: "Omelette",
    name: "Lot Omelette",
    price: 20,
  },

  {
    id: 10,
    category: "Omelette",
    name: "Rotty Omelette",
    price: 20,
  },

  // WRAPS
  {
    id: 11,
    category: "Wraps",
    name: "Chicken Wrap",
    price: 23,
  },

  {
    id: 12,
    category: "Wraps",
    name: "Bacon Wrap",
    price: 23,
  },

  // ROTTY
  {
    id: 13,
    category: "Rotty",
    name: "Crispy Rotty With Curry Dip",
    price: 12,
  },

  {
    id: 14,
    category: "Rotty",
    name: "Chocolate Rotty",
    price: 12,
  },

  // FRIED RICE
  {
    id: 15,
    category: "Fried Rice",
    name: "Chicken Rice",
    price: 12,
  },

  {
    id: 16,
    category: "Fried Rice",
    name: "Chicken Spicy Rice",
    price: 12,
  },

  {
    id: 17,
    category: "Fried Rice",
    name: "Extra Chicken Rice",
    price: 17,
  },

  {
    id: 18,
    category: "Fried Rice",
    name: "Egg Rice",
    price: 12,
  },

  // FRIED NOODLES
  {
    id: 19,
    category: "Fried Noodles",
    name: "Chicken Noodles",
    price: 12,
  },

  {
    id: 20,
    category: "Fried Noodles",
    name: "Chicken Spicy Noodles",
    price: 12,
  },

  {
    id: 21,
    category: "Fried Noodles",
    name: "Extra Chicken Noodles",
    price: 17,
  },

  {
    id: 22,
    category: "Fried Noodles",
    name: "Egg Noodles",
    price: 12,
  },

  // SNACKS
  {
    id: 23,
    category: "Snacks",
    name: "Fries",
    price: 10,
  },

  {
    id: 24,
    category: "Snacks",
    name: "Chicken Nuggets",
    price: 10,
  },

  // MILKSHAKES
  {
    id: 25,
    category: "Milkshakes",
    name: "Strawberry Milkshake",
    price: 20,
  },

  {
    id: 26,
    category: "Milkshakes",
    name: "Chocolate Milkshake",
    price: 20,
  },

  {
    id: 27,
    category: "Milkshakes",
    name: "Oreo Milkshake",
    price: 20,
  },

  {
    id: 28,
    category: "Milkshakes",
    name: "Oreo Strawberry Milkshake",
    price: 20,
  },

  // PROTEIN
  {
    id: 29,
    category: "Protein",
    name: "Chocolate Protein",
    price: 25,
  },

  {
    id: 30,
    category: "Protein",
    name: "Banana Protein",
    price: 25,
  },

  // JUICES
  {
    id: 31,
    category: "Juices",
    name: "Orange Juice",
    price: 10,
  },

  {
    id: 32,
    category: "Juices",
    name: "Apple Juice",
    price: 10,
  },

  // HOT & COLD
  {
    id: 33,
    category: "Hot & Cold",
    name: "Latte",
    price: 12,
    type: ["Hot", "Iced"],
    syrup: true,
  },

  {
    id: 34,
    category: "Hot & Cold",
    name: "Mocha",
    price: 12,
    type: ["Hot", "Iced"],
    syrup: true,
  },

  {
    id: 35,
    category: "Hot & Cold",
    name: "Americano",
    price: 12,
    type: ["Hot", "Iced"],
    syrup: true,
  },

];

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState("Home");

  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState<any[]>([]);

  const [selectedType, setSelectedType] = useState<any>({});

  const [selectedSyrup, setSelectedSyrup] = useState<any>({});

  const [customerName, setCustomerName] = useState("");

  const [customerPhone, setCustomerPhone] = useState("");

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1500);

  }, []);

  const categories = [...new Set(menuItems.map((item) => item.category))];

  const addToCart = (item: any) => {

    if (item.type && !selectedType[item.id]) {
      alert("Please select Hot or Iced");
      return;
    }

    const syrupChoice =
      selectedSyrup[item.id] || "No Syrup";

    const syrupPrice =
      syrupChoice !== "No Syrup" ? 3 : 0;

    const finalItem = {
      ...item,
      selectedDrinkType: selectedType[item.id] || "",
      selectedSyrup: syrupChoice,
      finalPrice: item.price + syrupPrice,
    };

    const existing = cart.find(
      (c) =>
        c.id === finalItem.id &&
        c.selectedDrinkType === finalItem.selectedDrinkType &&
        c.selectedSyrup === finalItem.selectedSyrup
    );

    if (existing) {

      setCart(
        cart.map((c) =>
          c.id === finalItem.id &&
          c.selectedDrinkType === finalItem.selectedDrinkType &&
          c.selectedSyrup === finalItem.selectedSyrup
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...finalItem,
          quantity: 1,
        },
      ]);

    }

  };

  const removeFromCart = (
    id: number,
    type?: string,
    syrup?: string
  ) => {

    const existing = cart.find(
      (item) =>
        item.id === id &&
        item.selectedDrinkType === type &&
        item.selectedSyrup === syrup
    );

    if (!existing) return;

    if (existing.quantity === 1) {

      setCart(
        cart.filter(
          (item) =>
            !(
              item.id === id &&
              item.selectedDrinkType === type &&
              item.selectedSyrup === syrup
            )
        )
      );

    } else {

      setCart(
        cart.map((item) =>
          item.id === id &&
          item.selectedDrinkType === type &&
          item.selectedSyrup === syrup
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );

    }

  };

  const total = cart.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
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

          <p className="text-[#c8a96b] mt-6 text-xl uppercase tracking-[0.3em]">
            Loading...
          </p>

        </div>

      </div>

    );

  }

  return (

    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="bg-[#f5ede3]">

        <img
          src="/hero-banner.jpeg"
          alt="Mamasan Scorpion"
          className="w-full h-auto"
        />

      </section>

      {/* FLOATING CART */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="fixed bottom-6 right-6 z-[9999] bg-[#c8a96b] text-black w-16 h-16 rounded-full text-2xl font-black"
      >
        🛒{cart.length}
      </button>

      {/* CATEGORY NAV */}
      <div className="sticky top-0 z-50 bg-black border-b border-[#c8a96b] overflow-x-auto">

        <div className="flex whitespace-nowrap">

          <button
            onClick={() => setActiveCategory("Home")}
            className={`px-5 py-4 font-black ${
              activeCategory === "Home"
                ? "bg-[#c8a96b] text-black"
                : "text-[#c8a96b]"
            }`}
          >
            HOME
          </button>

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-4 font-black uppercase ${
                activeCategory === category
                  ? "bg-[#c8a96b] text-black"
                  : "text-[#c8a96b]"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </div>

      {/* MENU */}
      <section className="p-8 bg-[#050505]">

        {(activeCategory === "Home"
  ? categories
  : [activeCategory]
).map((category) => (

            <div
              key={category}
              className="mb-20"
            >

              <h2 className="text-4xl font-black uppercase mb-10 text-[#c8a96b]">
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (

                    <div
                      key={item.id}
                      className="bg-[#111] border border-[#222] rounded-3xl p-6"
                    >

                      <h3 className="text-2xl font-black uppercase">
                        {item.name}
                      </h3>

                      {item.type && (

                        <div className="flex gap-2 mt-4">

                          {item.type.map((drinkType: string) => (

                            <button
                              key={drinkType}
                              onClick={() =>
                                setSelectedType({
                                  ...selectedType,
                                  [item.id]: drinkType,
                                })
                              }
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                selectedType[item.id] === drinkType
                                  ? "bg-[#c8a96b] text-black"
                                  : "bg-[#222]"
                              }`}
                            >
                              {drinkType}
                            </button>

                          ))}

                        </div>

                      )}

                      {item.syrup && (

                        <div className="mt-5">

                          <p className="text-xs text-gray-400 mb-3 uppercase">
                            Add Syrup (+RM3)
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {syrups.map((syrup) => (

                              <button
                                key={syrup}
                                onClick={() =>
                                  setSelectedSyrup({
                                    ...selectedSyrup,
                                    [item.id]: syrup,
                                  })
                                }
                                className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  selectedSyrup[item.id] === syrup
                                    ? "bg-[#c8a96b] text-black"
                                    : "bg-[#222]"
                                }`}
                              >
                                {syrup}
                              </button>

                            ))}

                          </div>

                        </div>

                      )}

                      <p className="text-[#c8a96b] text-2xl font-bold mt-5">
                        RM{item.price}
                      </p>

                      <button
                        onClick={() => addToCart(item)}
                        className="mt-6 w-full bg-[#c8a96b] text-black py-4 rounded-full font-black uppercase"
                      >
                        Add To Cart
                      </button>

                    </div>

                  ))}

              </div>

            </div>

          ))}

      </section>

      {/* CART */}
      {cartOpen && (

        <div className="fixed inset-0 bg-black/70 z-[9999] flex justify-end">

          <div className="w-full max-w-md bg-[#0d0d0d] h-screen overflow-y-auto p-6">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-4xl font-black">
                Cart
              </h2>

              <button
                onClick={() => setCartOpen(false)}
                className="text-3xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={`${item.id}-${item.selectedDrinkType}-${item.selectedSyrup}`}
                  className="bg-[#161616] p-5 rounded-3xl"
                >

                  <h3 className="font-black uppercase">
                    {item.name}
                  </h3>

                  <p className="text-[#c8a96b] mt-2 font-bold">
                    RM{item.finalPrice * item.quantity}
                  </p>

                  <div className="flex items-center gap-4 mt-4">

                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id,
                          item.selectedDrinkType,
                          item.selectedSyrup
                        )
                      }
                      className="bg-red-500 w-9 h-9 rounded-full font-black"
                    >
                      -
                    </button>

                    <p className="font-bold">
                      {item.quantity}
                    </p>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-[#c8a96b] text-black w-9 h-9 rounded-full font-black"
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                className="w-full bg-[#161616] border border-[#333] rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) =>
                  setCustomerPhone(e.target.value)
                }
                className="w-full bg-[#161616] border border-[#333] rounded-2xl px-5 py-4"
              />

            </div>

            <div className="mt-10 border-t border-[#222] pt-8">

              <h3 className="text-3xl font-black">
                TOTAL: RM{total}
              </h3>

              <button
                onClick={() => {

                  let message =
                    `NEW ORDER - MAMASAN SCORPION\n\n`;

                  cart.forEach((item) => {

                    message +=
                      `${item.quantity}x ${item.name} - RM${item.finalPrice * item.quantity}\n`;

                  });

                  message += `\nTOTAL: RM${total}`;
                  message += `\n\nNAME: ${customerName}`;
                  message += `\nPHONE: ${customerPhone}`;

                  window.open(
                    `https://wa.me/60124478224?text=${encodeURIComponent(message)}`,
                    "_blank"
                  );

                }}
                className="mt-6 w-full bg-[#c8a96b] text-black py-4 rounded-full font-black uppercase"
              >
                CHECKOUT
              </button>

            </div>

          </div>

        </div>

      )}

    </main>

  );

}