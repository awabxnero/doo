import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://www.dooprime.com/wp-content/uploads/2022/07/DGxAUFC-banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen bg-[#F7F8F9]"
      >
        <Navbar />
        <div className=" w-1/2 ml-40 min-h-screen flex flex-col items-start justify-center">
          <img
            className="w-1/2"
            src="https://www.dooprime.com/wp-content/uploads/2022/07/official-partner.png"
            alt=""
          />
          <h1 className=" text-5xl mt-4">
            Doo Group <br />
            Join Reds Family
          </h1>
          <button className=" text-white bg-[#D81C22] rounded-md px-20 py-4 my-10">
            More
          </button>
          <img
            className=" w-36"
            src="https://www.dooprime.com/wp-content/uploads/2022/07/trustpilot.png"
            alt=""
          />
        </div>
      </div>
      <div className=" min-h-screen flex flex-col items-center justify-center p-20">
        <h2 className="  text-4xl mb-4">Top-Notch Trading Environment</h2>
        <p>Enjoy Profitable Returns on Global Investment Transactions</p>
        <div className=" grid grid-cols-3 mt-10">
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4] border-r-[1px] border-b-[1px]">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-features-licensed-supervision.webp"
              alt=""
            />
            <h3 className=" text-3xl">Multiple Strict Regulations</h3>
            <p>
              Doo Prime is strictly regulated by multinational financial
              institutions such as Seychelles FSA, Mauritius FSC and Vanuatu
              FSC.
            </p>
          </div>
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4] border-r-[1px] border-b-[1px]">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-product-stock.webp"
              alt=""
            />
            <h3 className=" text-3xl">Ultra-Low Spreads</h3>
            <p>
              We offer minimized transactions costs with tight spreads as low as
              0.1 pips.
            </p>
          </div>
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4]  border-b-[1px]">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-features-trade.webp"
              alt=""
            />
            <h3 className=" text-3xl">`{">"}` 10,000 Trading Products</h3>
            <p>
              Enjoy endless trading opportunities with access to more than
              10,000 CFDs
            </p>
          </div>
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4] border-r-[1px] ">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-features-service.webp"
              alt=""
            />
            <h3 className=" text-3xl">
              24*7*365 <br />
              Professional Support
            </h3>
            <p>
              Doo Prime boasts a dedicated 500+ strong team of trained
              professionals to provide 365 days of top-of-the-line support
            </p>
          </div>
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4] border-r-[1px] ">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-features-tech.webp"
              alt=""
            />
            <h3 className=" text-3xl">Ultra Low Latency</h3>
            <p>
              Robust IT infrastructure and network by Equinix, enabling 99.5% of
              trade transactions done in 50 ms.
            </p>
          </div>
          <div className="flex flex-col p-10 items-center text-center border-[#E4E4E4] ">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/icon-features-1-500.webp"
              alt=""
            />
            <h3 className=" text-3xl">1:500 Leverage</h3>
            <p>
              Start trading with minimal capital and maximize your trading
              profits with flexible leverage of up to 1:500.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/map.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" min-h-screen flex flex-row"
      >
        <div className="flex flex-col w-full items-center justify-around">
          <p className=" text-5xl">Flexible Fund Access</p>
          <div>
            <p className=" text-4xl mb-10">
              <span className="text-[#D81C22] font-bold mr-2">22</span>
              Currencies Supported
            </p>
            <p className=" text-4xl">
              <span className="text-[#D81C22] font-bold mr-2">20</span>Funding
              Methods Available
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-y-16">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/VISA.svg"
              alt=""
            />
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/mastercard.svg"
              alt=""
            />
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/skrill.svg"
              alt=""
            />
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/neteller.svg"
              alt=""
            />
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/epay.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-e-Wallet.webp"
            alt=""
          />
        </div>
      </div>

      <div className=" min-h-screen bg-[#F6F9FA] p-20 flex flex-row">
        <img
          className=" w-1/2 h-full"
          src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/earth.gif"
          alt=""
        />
        <div className="flex flex-col justify-evenly">
          <h2 className=" text-5xl ">International Presence</h2>
          <p>
            There are operation centers in Dallas, Sydney, Singapore, Hong Kong,
            Dubai, Kuala Lumpur and other places.
          </p>
          <div className=" grid grid-cols-2 gap-y-10">
            <div className="flex flex-col">
              <p>Clients Worldwide</p>
              <p className=" text-[#D81C22] text-6xl font-bold mt-4">40,000+</p>
            </div>
            <div className="flex flex-col">
              <p>Coverage Regions</p>
              <p className=" text-[#D81C22] text-6xl font-bold mt-4">40+</p>
            </div>
            <div className="flex flex-col">
              <p>Institutional Partners</p>
              <p className=" text-[#D81C22] text-6xl font-bold mt-4">250+</p>
            </div>
            <div className="flex flex-col">
              <p>Elites from 10+ cities</p>
              <p className=" text-[#D81C22] text-6xl font-bold mt-4">500+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen  flex flex-col justify-center p-20">
        <h2 className="  text-4xl mb-4">Latest News</h2>
        <div className=" grid grid-cols-3 gap-x-6 gap-y-12 mt-10">
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DP22063-Doo-Prime-News-All-Topic_Expert-Opinion_480x320_EN.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              Slowdown In Hiring & Recession Fears
            </h3>
            <p>The tech giants, Apple, Microsoft, and Google indi…</p>
          </div>
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DP22083_Blog-Cover_480x320px_EN-2.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              Seamless Trading & Execution Through Your Smartphone
            </h3>
            <p>Doo Prime InTrade is an efficient and professional…</p>
          </div>
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DX22011-JUNE-Trading-Volume-DP_Blog-Cover-480x320_EN.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              Doo Prime’s Monthly Trading Volume Statistics for June 2022
            </h3>
            <p>Doo Group recorded USD65.96 billion in total tradi…</p>
          </div>
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DX22016_BlogCover_480x320px_EN.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              Doo Group Is A Proud Sponsor Of Adelaide United F.C.
            </h3>
            <p>Doo Group is proud to announce that we are now the…</p>
          </div>
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DP22063-Doo-Prime-News-All-Topic_System-Update_480x320_EN.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              Doo Prime InTrade & TradingView Maintenance Notice
            </h3>
            <p>Doo Prime would like to remind you that Doo Prime …</p>
          </div>
          <div className="flex flex-col ">
            <img
              src="https://www.dooprimenews.com/wp-content/uploads/2022/07/DP22063-Doo-Prime-News-All-Topic_Global-Stock-Market_480x320_EN.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              U.S. Stocks Closed Higher, Hong Kong Stocks Opened Lower
            </h3>
            <p>U.S. stocks closed higher on Wednesday, trading in…</p>
          </div>
        </div>
        <button className=" self-center  text-white bg-[#D81C22] rounded-md px-20 py-4 mt-20">
          More
        </button>
      </div>

      <div className=" min-h-screen flex flex-col items-center justify-center p-20">
        <h2 className="  text-4xl mb-4">Awards</h2>
        <p>
          We pursue excellence, and strive to create the best trading commodity
          brand
        </p>
        <div className=" grid grid-cols-5 gap-10 mt-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Award-Followme-2020.webp"
              alt=""
            />
            <h3 className=" text-xl font-bold">"Best Overall Broker"</h3>
            <p>FOLLOWME Annual Selection Awards 2020</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Award-excellent-customer-service.webp"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              “Excellent Customer Service Award”
            </h3>
            <p>2020 Global Derivatives Real Trading Competition</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Award-best-broker.webp"
              alt=""
            />
            <h3 className=" text-xl font-bold">"Best Broker"</h3>
            <p>2020 Financial Technology Honor Awards</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Award-FX168.webp"
              alt=""
            />
            <h3 className=" text-xl font-bold">
              “Excellent Customer Service Broker”
            </h3>
            <p>FX168 Brokers Billboard 2020 (Asia)</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Award-the-most-praised-broker.webp"
              alt=""
            />
            <h3 className=" text-xl font-bold">"The Most Praised Broker"</h3>
            <p>Huiyou.com Annual Awards</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/footer-banner-aufc.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-[220px]"
      ></div>
      <Footer />
    </>
  );
}

export default App;
