import React, { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [visibleMenu, setVisibleMenu] = useState();
  const [scrolledDown, setScrolledDown] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };
  }, []);
  return (
    <div className="  fixed  w-full z-50 ">
      <div
        className={` absolute left-0 top-0 right-0 ${
          scrolledDown ? "bg-white" : ""
        }  z-20 flex flex-row justify-between items-center py-4 px-20`}
      >
        <div>
          <img
            src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/common/logo-dp-dark.svg"
            alt=""
          />
        </div>
        <d className="flex flex-row w-1/2 justify-between mx-10">
          <p>Home</p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("Market");
            }}
          >
            Market
          </p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("Tools");
            }}
          >
            Tools
          </p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("Trading");
            }}
          >
            Trading
          </p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("Partnership");
            }}
          >
            Partnership
          </p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("About Us");
            }}
          >
            About Us
          </p>
          <p
            onMouseEnter={() => {
              setVisibleMenu("Help Centre");
            }}
          >
            Help Centre
          </p>
        </d>
        <div className="flex flex-row">
          <button className=" border-2 border-[#D81C22] text-[#D81C22] rounded-md px-12 py-2 ml-4">
            Login
          </button>
          <button className=" text-white bg-[#D81C22] rounded-md px-12 py-2 ml-4">
            Register
          </button>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-end pb-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[300px] w-full ${
          visibleMenu === "Market" ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <p className=" border-l-2 border-[#D91C22] pl-2">Popular products</p>
          <img
            className=" w-32 mb-4 mt-6"
            src="https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-securities.png"
            alt=""
          />
          <p>Securities</p>
        </div>
        <div className="flex flex-col items-center">
          <p className=" border-l-2 border-[#D91C22] pl-2">More products</p>

          <img
            className=" w-32 mb-4 mt-6"
            src="https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-future.png"
            alt=""
          />
          <p>Futures</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className=" w-32 mb-4"
            src="https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-FX-exchange.png"
            alt=""
          />
          <p>Forex</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className=" w-32 mb-4"
            src="	https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-metal.png"
            alt=""
          />
          <p>Precious Metals</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className=" w-32 mb-4"
            src="	https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-Commodities.png"
            alt=""
          />
          <p>Commodities</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className=" w-32 mb-4"
            src="https://www.dooprime.com/wp-content/uploads/2022/03/Doo-Prime-spot-index.png"
            alt=""
          />
          <p>Stock Indices</p>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-start pb-10 pt-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[400px] w-full ${
          visibleMenu === "Tools" ? "" : "hidden"
        }`}
      >
        <div className=" w-1/4 border-[#E4E4E4] border-r-[1px] mr-10">
          <p className=" text-2xl">Tools</p>
          <p>
            Diversified trading platforms provide various tools to facilitate
            customer transactions, break the limitations of financial
            transactions, and truly realize "one-click global investment".
          </p>
        </div>
        <div className="grid grid-cols-4 w-3/4">
          <div className="grid  gap-4">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Platform
            </p>
            <p>MetaTrader 4</p>
            <p>MetaTrader 5</p>
            <p>MT4 vs MT5</p>
            <p>Doo Prime InTrade</p>
            <p>TradingView</p>
            <p>FIX API 4.4</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Social Trading
            </p>
            <p>Outrade</p>
            <p>Myfxbook</p>
            <p>FOLLOWME</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Analysis
            </p>
            <p>Trading Central</p>
            <p>Economic Calendar</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Tools
            </p>
            <p>VPS</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-trading.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 200px top",
        }}
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-start pb-10 pt-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[400px] w-full ${
          visibleMenu === "Trading" ? "" : "hidden"
        }`}
      >
        <div className=" w-1/4 border-[#E4E4E4] border-r-[1px] mr-10 px-4">
          <p className=" text-2xl">Trading</p>
          <p>
            It has been committed to technological innovation, successfully
            created a high-stability, low-latency trading environment, and
            provided customers with a top-notch trading experience.
          </p>
        </div>
        <div className="grid grid-cols-4 w-3/4">
          <div className="grid  gap-4">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading
            </p>
            <p>Pricing Model</p>
            <p>Technology</p>
            <p>Accounts Comparison</p>
            <p>Funding</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Conditions
            </p>
            <p>Contract Specifications</p>
            <p>Trading Calendar</p>
            <p>Leverage</p>
            <p>Overnight Interest</p>
            <p>Dividend</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/aniversary.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 100px top 50px",
        }}
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-start pb-10 pt-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[400px] w-full ${
          visibleMenu === "Partnership" ? "" : "hidden"
        }`}
      >
        <div className=" w-1/4 border-[#E4E4E4] border-r-[1px] mr-10 px-4">
          <p className=" text-2xl">Partnership</p>
          <p>
            Hold a variety of trading feedback and welfare activities to thank
            customers for their continued support of the company.
          </p>
        </div>
        <div className="grid grid-cols-4 w-3/4">
          <div className="grid  gap-4 mr-4">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Promotion
            </p>
            <p>Points Mall</p>
            <p>DooTrader Trading Competition</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Partners
            </p>
            <p>Introducing Brokers</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-about-us.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 100px top 50px",
        }}
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-start pb-10 pt-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[400px] w-full ${
          visibleMenu === "About Us" ? "" : "hidden"
        }`}
      >
        <div className=" w-1/4 border-[#E4E4E4] border-r-[1px] mr-10 px-4">
          <p className=" text-2xl">About Us</p>
          <p>
            Doo Prime offers tens of thousands of CFD products, holds multiple
            international regulatory licenses, and has operation centers around
            the world.
          </p>
        </div>
        <div className="grid grid-cols-4 w-3/4">
          <div className="grid  gap-4 mr-4">
            <p>Our Story</p>
            <p>Corporate Social Responsibility</p>
            <p>Compliance</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p>Media Center</p>
            <p>Contact us</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setVisibleMenu("");
        }}
        className={`flex flex-row justify-around items-start pb-10 pt-20 px-20 absolute top-20 top left-0 bg-white z-10 h-[400px] w-full ${
          visibleMenu === "Help Centre" ? "" : "hidden"
        }`}
      >
        <div className=" w-1/4 border-[#E4E4E4] border-r-[1px] mr-10 px-4">
          <p className=" text-2xl">Help Centre</p>
          <p>
            If customers have any questions, please browse the help center, or
            consult the 7*24-hour customer service to solve problems online at
            any time.
          </p>
        </div>
        <div className="grid grid-cols-4 w-3/4">
          <div className="grid  gap-4 mr-4">
            <p>Account Related</p>
            <p>Trading Products</p>
            <p>Social Trading</p>
            <p>Analyzing Tools</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p>Funding</p>
            <p>Trading Platform</p>
            <p>Trading Tools</p>
            <p>Promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
