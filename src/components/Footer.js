import React from "react";

export default function Footer() {
  return (
    <>
      <div className="min-h-screen flex flex-row px-20 py-10">
        <div className=" w-1/2 flex flex-col justify-between">
          <img
            className=" w-1/2"
            src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/common/logo-dp-dark.svg"
            alt=""
          />
          <div className="flex flex-col">
            <p className=" font-bold">Contacts:</p>
            <p>+44 11 3733 5199（Europe）</p>
            <p>+852 3704 4241（Asia）</p>
            <p>+65 6011 1415 (Asia - Singapore)</p>
            <p>+86 400 8427 539 (Asia - China Region)</p>
          </div>
          <div className="flex flex-col">
            <p className=" font-bold">Email Address:</p>
            <p>en.sales@dooprime.com（Account Manager）</p>
            <p>en.support@dooprime.com（Technical Support）</p>
          </div>
          <div></div>
        </div>
        <div className=" w-full  gap-4  grid grid-cols-5">
          <div className="grid  gap-4 auto-rows-min">
            <p className=" font-extrabold">Markets</p>
            <p>Securities</p>
            <p>Futures</p>
            <p>Forex</p>
            <p>Precious Metals</p>
            <p>Commodities</p>
            <p>Stock Indices</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" font-extrabold">Tools</p>

            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Platform
            </p>
            <p>MetaTrader 4</p>
            <p>MetaTrader 5</p>
            <p>MT4 vs MT5</p>
            <p>Doo Prime InTrade</p>
            <p>TradingView</p>
            <p>FIX API 4.4</p>
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Social Trading
            </p>
            <p>Outrade</p>
            <p>Myfxbook</p>
            <p>FOLLOWME</p>
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Analysis
            </p>
            <p>Trading Central</p>
            <p>Economic Calendar</p>
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Tools
            </p>
            <p>VPS</p>
          </div>
          <div className="grid  gap-4  auto-rows-min">
            <p className=" font-extrabold">Trading</p>

            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Transaction overview
            </p>
            <p>Pricing Model</p>
            <p>Technology</p>
            <p>Accounts Comparison</p>
            <p>Funding</p>
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Trading Conditions
            </p>
            <p>Contract Specifications</p>
            <p>Trading Calendar</p>
            <p>Leverage</p>
            <p>Overnight Interest</p>
            <p>Dividend</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" font-extrabold">Partnership</p>

            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Promotion
            </p>
            <p>Points Mall</p>
            <p>DooTrader Trading Competition</p>
            <p className=" border-l-2 border-[#D91C22] pl-2 font-bold">
              Partners
            </p>
            <p>Introducing Brokers</p>
          </div>
          <div className="grid  gap-4 auto-rows-min">
            <p className=" font-extrabold">About Us</p>

            <p>Our Story</p>
            <p>Corporate Social Responsibility</p>
            <p>Compliance</p>
            <p>Media Center</p>
            <p>Contact us</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
      <div className=" justify-between px-20 py-14 bg-[#EEF1F3] flex flex-col">
        <p className=" font-bold leading-10">Compliance</p>
        <p className=" text-[#13A0FF]">
          (We have detected that you may be accessing this website from a
          jurisdiction: Malaysia where we do not provide services. Your legal
          rights shall not be protected under the laws and regulations of your
          jurisdiction. You shall be governed by the laws of 'Republic of
          Vanuatu', and you hereby acknowledge the risks in complying with the
          laws of 'Republic of Vanuatu'.)
        </p>
        <p>
          Please read the following Compliance Disclosure carefully <br />
          This website is owned and operated by Doo Prime Vanuatu Limited.{" "}
          <br />
          The website can be accessed globally and is not specific to any
          entity. This is mainly for the convenience of centralized display and
          comparison of information. Your actual rights and obligations will be
          determined based on the entity and jurisdiction that you choose to be
          regulated. <br />
          You must be of at least 18 years old before you can access our website
          products and services. By accessing our website, you confirm you are
          an individual of full age and capacity. <br /> There may be local laws
          and regulations which prohibit or limit your rights to access,
          download, distribute, disseminate, share or otherwise use any or all
          of the documents and information published on this website.
        </p>
        <div className="flex flex-row py-4 mt-10 justify-between font-extrabold border-t-[1px] border-b-[1px] border-[#E4E4E4]">
          <p>High Risk Trading Products Risk Disclosure</p>
          <p>Brand and Entity Notice</p>
          <p>Client Notice</p>
          <p>Doo Entities Notice</p>
        </div>
        <div className="flex flex-row justify-between px-20  mt-20">
          <p>Client Agreement</p>
          <p>AML & CTF Policy</p>
          <p>Execution Policy</p>
          <p>Refund Policy</p>
          <p>Risk Acknowledgement</p>
          <p>Privacy Policy</p>
          <p>Website T&C</p>
          <p>Sitemap</p>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#000019] text-white py-4 ">
        <p>
          This website is owned and operated by Doo Prime Vanuatu Limited
          (Company No. 700238). © 2022 Doo Prime. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
