"use client";

import { useEffect, useState } from "react";

const syrups = [
  "Caramel",
  "Hazelnut",
  "Vanilla",
  "Brown Sugar",
];

const menuItems = [
  {
    id: 1,
    category: "Burgers",
    name: "Crispy Chicken Burger & Chips",
    price: 25,
  },

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
    category: "Omelette",
    name: "Chicken Cheese Omelette",
    price: 15,
  },

  {
    id: 5,
    category: "Omelette",
    name: "Bacon Cheese Omelette",
    price: 15,
  },

  {
    id: 6,
    category: "Rotty Wrap",
    name: "Chicken Wrap",
    price: 23,
  },

  {
    id: 7,
    category: "Signature Rotty",
    name: "Chocolate Rotty",
    price: 12,
  },

  {
    id: 8,
    category: "Fried Rice & Noodles",
    name: "Chicken Rice",
    price: 12,
  },

  {
    id: 9,
    category: "Snacks",
    name: "Fries",
    price: 10,
  },

  {
    id: 10,
    category: "Milkshakes",
    name: "Oreo Milkshake",
    price: 20,
  },

  {
    id: 11,
    category: "Protein Shakes",
    name: "Chocolate Protein",
    price: 25,
  },

  {
    id: 12,
    category: "Fresh Juice",
    name: "Orange Juice",
    price: 10,
  },

  {
    id: 13,
    category: "Hot & Cold",
    name: "Latte",
    price: 12,
    type: ["Hot", "Iced"],
    syrup: true,
  },

  {
    id: 14,
    category: "Hot & Cold",
    name: "Cappuccino",
    price: 12,
    type: ["Hot", "Iced"],
    syrup: true,
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

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
    }, 1200);
  }, []);

  const categories = [...new Set(menuItems.map((item) => item.category))];

  const addToCart = (item: any) => {
    if (item.type && !selectedType[item.id]) {
      alert("Please select Hot or Iced");
      return;
    }

    const syrupChoice = selectedSyrup[item.id] || "No Syrup";

    const syrupPrice = syrupChoice !== "No Syrup" ? 3 : 0;

    const finalItem = {
      ...item,
      selectedDrinkType: selectedType[item.id],
      selectedSyrup: syrupChoice,
      finalPrice: item.price + syrupPrice,
    };

    setCart([...cart, finalItem]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.finalPrice,
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

      {/* HERO */}
      <section className="bg-[#f5ede3]">
        <img
          src="/hero-banner.jpeg"
          alt="Mamasan Scorpion"
          className="w-full h-auto"
        />
      </section>

      {/* TOP BAR */}
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

        {menuOpen && (

  <div className="border-t border-[#222] bg-black">

    <div className="flex flex-col">

      <button
        onClick={() => {
          setActiveCategory("Home");
          setMenuOpen(false);
        }}
        className="px-5 py-4 text-left text-[#c8a96b] font-black border-b border-[#222]"
      >
        HOME
      </button>

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => {
            setActiveCategory(category);
            setMenuOpen(false);
          }}
          className="px-5 py-4 text-left text-[#c8a96b] font-black uppercase border-b border-[#222]"
        >
          {category}
        </button>

      ))}

    </div>

  </div>

)}
           
      </div>

      {/* MENU */}
      <section className="p-6 bg-[#050505]">

        {(activeCategory === "Home"
          ? categories
          : [activeCategory]
        ).map((category) => (

          <div
            key={category}
            className="mb-16"
          >

            <h2 className="text-4xl font-black uppercase mb-8 text-[#c8a96b]">
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
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

                        <p className="text-gray-400 text-sm mb-3">
                          ADD SYRUP (+RM3)
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
                              className={`px-3 py-1 rounded-full text-sm font-bold ${
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

                    <p className="text-[#c8a96b] text-3xl font-black mt-6">
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

      {/* FLOATING CART */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 bg-[#c8a96b] text-black w-16 h-16 rounded-full text-2xl z-50"
      >
        🛒
      </button>

      {/* CART */}
      {cartOpen && (

        <div className="fixed inset-0 bg-black/70 z-[9999] flex justify-end">

          <div className="w-full max-w-md bg-[#111] h-screen overflow-y-auto p-6">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-4xl font-black">
                CART
              </h2>

              <button
                onClick={() => setCartOpen(false)}
                className="text-3xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="bg-[#1a1a1a] p-5 rounded-3xl"
                >

                  <h3 className="font-black uppercase">
                    {item.name}
                  </h3>

                  {item.selectedDrinkType && (
                    <p className="text-sm text-gray-400 mt-1">
                      {item.selectedDrinkType}
                    </p>
                  )}

                  {item.selectedSyrup !== "No Syrup" && (
                    <p className="text-sm text-[#c8a96b] mt-1">
                      {item.selectedSyrup} Syrup
                    </p>
                  )}

                  <p className="text-[#c8a96b] font-bold mt-3">
                    RM{item.finalPrice}
                  </p>

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
                className="w-full bg-[#1a1a1a] rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) =>
                  setCustomerPhone(e.target.value)
                }
                className="w-full bg-[#1a1a1a] rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            <div className="mt-10 border-t border-[#222] pt-8">

              <h3 className="text-3xl font-black">
                TOTAL: RM{total}
              </h3>

              <button
                onClick={() => {

                  let message = `NEW ORDER - MAMASAN SCORPION\n\n`;

                  cart.forEach((item) => {
                    message += `${item.name} - RM${item.finalPrice}\n`;
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
                Checkout
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}