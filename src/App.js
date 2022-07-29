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
        className=" min-h-screen flex flex-row mb-40"
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
        <div className="w-full relative flex flex-col justify-center items-center">
          <img
            className=" w-3/4"
            src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-e-Wallet.webp"
            alt=""
          />
          <img
            className=" absolute bottom-[-100px] left-0"
            src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/homepage-element.svg"
            alt=""
          />
          <img
            className=" absolute right-[-200px] top-20"
            src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/element2.svg"
            alt=""
          />
        </div>
      </div>

      <div className=" min-h-screen relative flex flex-col items-center p-20 mb-80">
        <h2 className=" text-5xl mb-10">Multiple Trading Accounts</h2>
        <p className="text-[#D81C22]">Learn More</p>
        <div className=" absolute z-20 mt-20 top-40 flex flex-row w-[90vw] bg-white opacity-90 ">
          <div className="w-full h-full flex flex-col p-10 border-[#E4E4E4] border-r-[1px]">
            <div className="flex flex-col">
              <div className="flex flex-row w-3/4 items-center justify-between">
                <img
                  className=" w-42"
                  src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/CENT.svg"
                  alt=""
                />
                <img
                  src={require("./assets/icons/dropdown.png")}
                  alt=""
                  className="  h-2"
                />
              </div>
              <p className=" mt-6 mb-10">Account Currency: USC</p>
            </div>
            <div className="flex flex-col">
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Minimum Deposit</p>
                <p className=" text-5xl">100</p>
              </div>
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Spread</p>
                <p className=" text-5xl">High</p>
              </div>
              <div className=" py-10  flex flex-row justify-between">
                <p>Free Demo</p>
                <p className=" text-5xl">None</p>
              </div>
              <button className="self-center mt-10 border-2 border-[#D81C22] text-[#D81C22] rounded-md px-12 py-2 ml-4">
                Register
              </button>
            </div>
          </div>

          <div className="w-full h-full flex flex-col p-10 border-[#E4E4E4] border-r-[1px]">
            <div className="flex flex-col">
              <div className="flex flex-row w-3/4 items-center justify-between">
                <img
                  className=" w-42"
                  src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/STP.svg"
                  alt=""
                />
                <img
                  src={require("./assets/icons/dropdown.png")}
                  alt=""
                  className="  h-2"
                />
              </div>
              <p className=" mt-6 mb-10">Account Currency: USD</p>
            </div>
            <div className="flex flex-col">
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Minimum Deposit</p>
                <p className=" text-5xl">100</p>
              </div>
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Spread</p>
                <p className=" text-5xl">Medium</p>
              </div>
              <div className=" py-10  flex flex-row justify-between">
                <p>Free Demo</p>
                <p className=" text-5xl">Yes</p>
              </div>
              <button className="self-center mt-10 border-2 border-[#D81C22] text-[#D81C22] rounded-md px-12 py-2 ml-4">
                Register
              </button>
            </div>
          </div>

          <div className="w-full h-full flex flex-col p-10 ">
            <div className="flex flex-col">
              <div className="flex flex-row w-3/4 items-center justify-between">
                <img
                  className=" w-42"
                  src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/ECN.svg"
                  alt=""
                />
                <img
                  src={require("./assets/icons/dropdown.png")}
                  alt=""
                  className="  h-2"
                />
              </div>
              <p className=" mt-6 mb-10">Account Currency: USC</p>
            </div>
            <div className="flex flex-col">
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Minimum Deposit</p>
                <p className=" text-5xl">5,000</p>
              </div>
              <div className=" py-10 border-[#E4E4E4] border-b-[1px] flex flex-row justify-between">
                <p>Spread</p>
                <p className=" text-5xl">Low</p>
              </div>
              <div className=" py-10  flex flex-row justify-between">
                <p>Free Demo</p>
                <p className=" text-5xl">None</p>
              </div>
              <button className="self-center mt-10 border-2 border-[#D81C22] text-[#D81C22] rounded-md px-12 py-2 ml-4">
                Register
              </button>
            </div>
          </div>
        </div>
        <img
          className=" absolute z-10 left-[-140px] top-[250px]"
          src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-STP-CENT-Account.webp"
          alt=""
        />
        <img
          className=" absolute z-10 right-[-380px] top-[350px]"
          src="	https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-ECN-Account.webp"
          alt=""
        />
        <img
          className=" absolute z-10 left-[100px] top-0"
          src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/ganggan_backgroup.svg"
          alt=""
        />
      </div>

      <div className="relative min-h-screen flex flex-col mb-80">
        <div className=" pl-20 mb-20">
          <h2 className=" text-5xl mb-6">
            Safe and Reliable Trading Platforms
          </h2>
          <p>
            Enhance your trading experience with internationally recognized and
            reliable trading platforms.
          </p>
        </div>
        <div className=" relative ">
          <div className=" absolute z-20 top-[-40px] right-0">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-MT4.webp"
              alt=""
              className=" h-[700px] w-auto"
            />
          </div>
          <div className="absolute z-10  w-[100vw]">
            <div
              style={{
                background: "linear-gradient(to right, #f5f5f6, #ffffff)",
              }}
              className="     pl-20  py-10"
            >
              <div className="flex flex-row h-[300px] w-[500px] mb-10">
                <div className="mr-4">
                  <img
                    className=" w-32"
                    src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/MT4.svg"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col ">
                  <div className=" flex flex-col">
                    <p className=" text-[#D81C22] border-[#D81C22] border-l-2 text-3xl font-bold pl-8 py-2 mt-2 mb-4">
                      MetaTrader 4
                    </p>
                    <p className="pl-8">
                      Enhance your trading experience with internationally
                      recognized and reliable trading platforms.
                    </p>
                  </div>
                  <div className=" flex flex-col ml-8  border-[#E4E4E4] border-t-[1px] pt-4 mt-10">
                    <p>Supported download platforms:</p>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-10 mt-4 w-full">
                      <div className=" flex flex-row justify-between items-center">
                        <div className=" flex flex-row items-center w-full">
                          <img
                            src={require("./assets/icons/windows.png")}
                            alt=""
                            className="  h-6 mr-4"
                          />
                          <p>Windows Desktop</p>
                        </div>
                        <img
                          src={require("./assets/icons/download.png")}
                          alt=""
                          className=" h-6"
                        />
                      </div>
                      <div className=" flex flex-row justify-between items-center">
                        <div className=" flex flex-row items-center w-full">
                          <img
                            src={require("./assets/icons/apple.png")}
                            alt=""
                            className="  h-6 mr-4"
                          />
                          <p>iOS Mobile</p>
                        </div>
                        <img
                          src={require("./assets/icons/download.png")}
                          alt=""
                          className=" h-6"
                        />
                      </div>
                      <div className=" flex flex-row justify-between items-center">
                        <div className=" flex flex-row items-center w-full">
                          <img
                            src={require("./assets/icons/playstore.png")}
                            alt=""
                            className="  h-6 mr-4"
                          />
                          <p>Google Play</p>
                        </div>
                        <img
                          src={require("./assets/icons/download.png")}
                          alt=""
                          className=" h-6"
                        />
                      </div>
                      <div className=" flex flex-row justify-between items-center">
                        <div className=" flex flex-row items-center w-full">
                          <img
                            src={require("./assets/icons/android.png")}
                            alt=""
                            className="  h-6 mr-4"
                          />
                          <p>Android APK</p>
                        </div>
                        <img
                          src={require("./assets/icons/download.png")}
                          alt=""
                          className=" h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderImage: "linear-gradient(to right, #f5f5f6, #ffffff)",
                borderImageSlice: 1,
                borderStyle: "solid",
                borderWidth: "3px",
              }}
              className="flex row  items-center pl-20 py-4"
            >
              <img
                className=" w-16 mr-12"
                src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/MT4.svg"
                alt=""
              />
              <p className=" text-3xl font-bold">MetaTrader 5</p>
            </div>
            <div
              style={{
                borderImage: "linear-gradient(to right, #f5f5f6, #ffffff)",
                borderImageSlice: 1,
                borderStyle: "solid",
                borderWidth: "2px",
              }}
              className="flex row  items-center pl-20 py-4"
            >
              <img
                className=" w-16 mr-12"
                src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/DooPrimeInTrade.svg"
                alt=""
              />
              <p className=" text-3xl font-bold">Doo Prime InTrade</p>
            </div>
            <div
              style={{
                borderImage: "linear-gradient(to right, #f5f5f6, #ffffff)",
                borderImageSlice: 1,
                borderStyle: "solid",
                borderWidth: "4px",
              }}
              className="flex row  items-center pl-20 py-8"
            >
              <img
                className=" w-16 mr-12"
                src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Tradingview.svg"
                alt=""
              />
              <p className=" text-3xl font-bold">TradingView</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-screen relative">
        <div className=" absolute z-20 right-20 top-0 w-1/3">
          <h2 className=" text-5xl">Social Trading</h2>
          <p>
            You can become a publisher of trading strategies, or you can follow
            other excellent traders to trade and enjoy the return on investment.
          </p>
        </div>
        <div class=" mx-20 absolute z-10">
          <img
            src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Trading-Network-Anim.gif"
            class="bg-image"
            alt="Doo Prime Trading Network"
          />
        </div>
        <div className="">
          <div className=" bg-white rounded-full px-4 py-2 shadow-md absolute z-20 top-[5.3%] left-[28%]">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/myfxbook.svg"
              alt=""
            />
          </div>
          <div className=" bg-white rounded-full px-4 py-2 shadow-md absolute z-20 bottom-[33%] left-[30%] ">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/outrade.svg"
              alt=""
            />
          </div>
          <div className=" bg-white rounded-full px-4 py-2 shadow-md absolute z-20 top-[36%] left-[49%] ">
            <img
              src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/followme.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="  flex flex-row justify-between items-start w-full p-20">
        <div className="flex flex-col self-stretch justify-between pt-10 pb-20">
          <div className=" w-3/4 pr-20">
            <h2 className=" text-5xl mb-4">Technical Analysis</h2>
            <p className="">
              Provide global users with analytical tools such as Trading Central
              and an economic calendar, and take advantage of technological
              advantages to discover more investment opportunities.
            </p>
          </div>
          <button className=" self-start text-white bg-[#D81C22] rounded-md px-12 py-4">
            Register
          </button>
        </div>
        <img
          className=" w-1/2 h-full"
          src="https://www.dooprime.com/wp-content/themes/DP3-1104/style/images/homepage/Doo-Prime-Trading-Central-Featured-Ideas.webp"
          alt=""
        />
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
