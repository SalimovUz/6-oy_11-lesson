import React, { useEffect, useState } from "react";
import axios from "axios";
import searching from "../../public/images/search.svg";
import "../App.css"

const Foods = () => {
  const [foodNav, setFoodNav] = useState(0)
  const [filteredData, setFilteredData] = useState([]);
  const [dishes, setDishes] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);

  useEffect(() => {
    axios
      .get("https://662c92670547cdcde9de970f.mockapi.io/Product")
      .then((response) => {
        setDishes(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredData(filtered);
  };

  // Boshqa narsa

  

  return (
    <div>
      <div className="fixed justify-between w-3/5 ml-28 bg-[#252836] pb-20 pt-6">
        <nav className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-[28px] font-[barlow] font-semibold">
              Salimov To'lqin
            </h1>
            <h2 className="font-[barlow] font-normal text-base">
              {formattedDate}
            </h2>
          </div>

          <label
            htmlFor="search"
            className="flex bg-[#2D303E] rounded-lg px-5 py-3 gap-2 border border-[#393C49]"
          >
            <img src={searching} alt="" />
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Search for food, coffe, etc.."
              id="search"
              value={searchTerm}
              onChange={handleChange}
            />
          </label>
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        <div className="fixed w-3/5 ml-28 mt-28 bg-[#252836]">
          <div className="navbar w-full mt-4 pb-3">
            <ul className="flex gap-[4%] mb-2">
              <li>
                <a
                  className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Hot dishes
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    setFoodNav(1);
                  }}
                  className="text-base px-4 font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Cold dishes
                </a>
              </li>

              <li>
                <a
                  className="text-base px-4 font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Soup
                </a>
              </li>

              <li>
                <a
                  className="text-base px-4 font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Grill
                </a>
              </li>

              <li>
                <a
                  className="text-base px-4 font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Birbalo
                </a>
              </li>

              <li>
                <a
                  className="text-base px-4 font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                  href="#"
                >
                  Dessert
                </a>
              </li>
            </ul>
            <hr className="w-full bg-[#393C49]" />
          </div>

          {/* Choose dishes */}
          <div className="w-full mt-4 pb-3">
            <div className="top flex justify-between w-full">
              <h1 className="font-[barlow] font-semibold text-lg">
                Choose Dishes
              </h1>
              <select className="bg-[#1F1D2B] outline-none" name="" id="">
                <option value="">Dine in</option>
                <option value="">To go</option>
                <option value="">Delivery</option>
              </select>
            </div>
          </div>
        </div>
        {foodNav === 0 && (
          <main className="ml-28 mt-56 w-[105%]">
            <div className="dishes">
              <div className="dishess flex flex-wrap gap-2 justify-between">
                {filteredData.map((dish) => (
                  <div
                    className="dish transition-all duration-800 mt-12 w-[31%] h-[250px] text-center rounded-lg bg-[#1F1D2B] flex flex-col gap-1 pb-4 hover:cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.07)_0px_4px_6px,_rgba(0,_0,_0,_0.07)_0px_6px_8px,_rgba(0,_0,_0,_0.07)_0px_4px_8px,_rgba(0,_0,_0,_0.07)_0px_8px_16px,_rgba(0,_0,_0,_0.07)_0px_16px_32px,_rgba(0,_0,_0,_0.07)_0px_32px_64px] hover:transition-[1s]"
                    key={dish.id}
                  >
                    <img
                      className="w-36 h-36 mx-auto rounded-full mt-[-40px]"
                      src={dish.img}
                      alt=""
                    />
                    <h1 className="font-[barlow] font-medium text-xl">
                      {dish.name}
                    </h1>
                    <h2 className="font-[barlow] font-medium text-md">
                      $ {dish.price}
                    </h2>
                    <h3 className="text-[#ABBBC2] text-md font-[barlow]">
                      {dish.available} Bowls available
                    </h3>
                    <button className="btn text-[#1F1D2B] mx-auto ">
                      Savatga qo'shish
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {foodNav === 1 && (
          <main className="ml-28 mt-56 w-[105%]">
            <div className="dishes">
              <div className="dishess flex flex-wrap gap-2 justify-between">
                {filteredData.map((dish) => (
                  <div
                    className="dish transition-all duration-800 mt-12 w-[31%] h-[250px] text-center rounded-lg bg-[#1F1D2B] flex flex-col gap-1 pb-4 hover:cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.07)_0px_4px_6px,_rgba(0,_0,_0,_0.07)_0px_6px_8px,_rgba(0,_0,_0,_0.07)_0px_4px_8px,_rgba(0,_0,_0,_0.07)_0px_8px_16px,_rgba(0,_0,_0,_0.07)_0px_16px_32px,_rgba(0,_0,_0,_0.07)_0px_32px_64px] hover:transition-[1s]"
                    key={dish.id}
                  >
                    <img
                      className="w-36 h-36 mx-auto rounded-full mt-[-40px]"
                      src={dish.img}
                      alt=""
                    />
                    <h1 className="font-[barlow] font-medium text-xl">
                      {dish.name}
                    </h1>
                    <h2 className="font-[barlow] font-medium text-md">
                      $ {dish.price}
                    </h2>
                    <h3 className="text-[#ABBBC2] text-md font-[barlow]">
                      {dish.available} Bowls available
                    </h3>
                    <button className="btn text-[#1F1D2B] mx-auto ">
                      Savatga qo'shish
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Foods;
