import * as React from 'react';
import { PieChart } from "react-minimal-pie-chart";

export const Footer = (): React.ReactElement => {
  const [amount, setAmount] = React.useState(130);

  return (
    <footer className="w-full">
      <div className="bg-[#ffcf00] py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-8">TAKE ACTION</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-bold text-lg mb-2">Join us on TikTok</h1>
              <p className="text-sm mb-4 text-justify">
                Use your social media influence as a platform to raise awareness for ending world hunger.
              </p>
              <button className="border-2 border-black px-4 py-2 font-bold text-sm hover:bg-black hover:text-[#ffcf00] transition-colors">
                <a href='https://www.tiktok.com/@wfpusa'>
                  @WFPUSA ON TIKTOK
                </a>
              </button>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-bold text-lg mb-2">Be an Advocate</h1>
              <p className="text-sm mb-4 text-justify">
                Send an email to your representative in Congress to advocate on behalf of the hungry.
              </p>
              <button className="border-2 border-black px-4 py-2 font-bold text-sm hover:bg-black hover:text-[#ffcf00] transition-colors">
                <a href='https://www.wfpusa.org/policy-advocacy/campaigns/'>
                  WRITE TO CONGRESS
                </a>
              </button>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-2"><a href='https://www.wfpusa.org/freerice/'>Play Freerice</a></h3>
              <p className="text-sm mb-4 text-justify">
                You pick the topic, and for every correct answer 10 grains of rice are donated to change lives.
              </p>
              <button className="border-2 border-black px-4 py-2 font-bold text-sm hover:bg-black hover:text-[#ffcf00] transition-colors">
              <a href='https://freerice.com'>
                PLAY GAME
              </button>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-2"><a href='https://quiz.wfpusa.org/quiz/hunger/'>Take the Hunger Quiz</a></h3>
              <p className="text-sm mb-4 text-justify">
                How much do you know about the causes of global hunger? Let's find out! The answers may surprise you.
              </p>
              <button className="border-2 border-black px-4 py-2 font-bold text-sm hover:bg-black hover:text-[#ffcf00] transition-colors">
                <a href='https://www.wfpusa.org/get-involved/'>TAKE QUIZ</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffcf00] pb-8 flex justify-center">
        <button className="bg-[#003263] text-white px-6 py-2 font-bold hover:bg-[#002040] transition-colors">
          <a href="https://pump.fun/">GET INVOLVED</a>
        </button>
      </div>

      <div className="bg-[#f5f5f5] py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <a href="https://www.wfpusa.org/contact/" className="text-[#003263] hover:underline">
              Send us a message
            </a>

            <div className="mt-4">
              <p className="font-bold text-sm">General Inquiries</p>
              <a href="tel:2026277822" className="text-[#003263] hover:underline text-sm">
                (202) 627-3737
              </a>
            </div>

            <div className="mt-4">
              <p className="font-bold text-sm">Donation, Corporate & Foundation Inquiries</p>
              <a href="tel:2026273939" className="text-[#003263] hover:underline text-sm">
                (202) 627-3939
              </a>
            </div>

            <div className="mt-4">
              <p className="font-bold text-sm">Physical Address</p>
              <p className="text-sm">1750 H Street NW, Ste 500</p>
              <p className="text-sm">Washington, DC 20006</p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-sm">Mail donations to:</p>
              <p className="text-sm">World Food Program USA</p>
              <p className="text-sm">P.O. Box 96516</p>
              <p className="text-sm">Washington, DC 20090-6316</p>
            </div>

            <div className="mt-4">
              <p className="text-sm">EIN: 13-3843435</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">BUY CONFIDENTLY</h3>
            <p className="text-sm mb-2">
              World Food Program USA earned a Platinum Transparency seal from{" "}
              <a href="https://www.guidestar.org/profile/13-3843435" className="text-[#003263] hover:underline">
                Candid GuideStar
              </a>
              , the highest designation in its field.
            </p>

            <p className="text-sm mb-4">
              Our clear-cut tokenomics offer full transparency on your investment and our allocation.
              <br/>
            </p>

            <div className="flex items-center text-center justify-center">
              <div className="relative w-24 h-24">
                <PieChart
                  data={[
                    {title: "Operations", value: 10, color: "#055f60"},
                    {title: "Community", value: 90, color: "#033f40"},
                  ]}
                />
              </div>
              <div className="ml-4">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#055f60] mr-2"></div>
                  <span className="text-xs">Operations</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#033f40] mr-2"></div>
                  <span className="text-xs">Community</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#e31837]">DONATE</h3>

            <div className="border border-gray-300 p-4 rounded">
              <div className="flex mb-4">
                <button className="flex-1 border border-[#003263] text-[#003263] py-1 rounded-l">One-time</button>
                <button
                  className="flex-1 border border-[#003263] border-l-0 bg-white text-[#003263] py-1 rounded-r flex items-center justify-center">
                <svg className="w-4 h-4 text-[#e31837] mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Monthly
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-2">
                <button onClick={() => setAmount(1000)} className="border border-gray-300 py-1 hover:bg-gray-100">$1,000</button>
                <button onClick={() => setAmount(500)} className="border border-gray-300 py-1 hover:bg-gray-100">$500</button>
                <button onClick={() => setAmount(250)} className="border border-gray-300 py-1 hover:bg-gray-100">$250</button>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <button onClick={() => setAmount(100)} className="border border-gray-300 py-1 hover:bg-gray-100">$100</button>
                <button onClick={() => setAmount(50)} className="border border-gray-300 py-1 hover:bg-gray-100">$50</button>
                <button onClick={() => setAmount(25)} className="border border-gray-300 py-1 hover:bg-gray-100">$25</button>
              </div>

              <div className="flex mb-4">
                <div className="flex items-center border border-gray-300 rounded px-4 w-full">
                  <span className="text-gray-500 mr-2">$</span>
                  <input
                    type="text"
                    className="w-full py-2 px-1 focus:outline-none"
                    value={amount}
                  />
                  <span className="text-gray-500 ml-4">USD</span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" id="dedicate" />
                <label htmlFor="dedicate" className="text-sm">
                  Make this donation recurring
                </label>
              </div>

              <button className="w-full bg-[#e31837] text-white py-2 font-bold hover:bg-[#c41530] transition-colors">
                <a href="https://www.wfpusa.org/ways-to-give/crypto/">
                  DONATE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#4d4d4d] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.facebook.com/WFPUSA" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
            <a href="https://twitter.com/WFPUSA" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/wfpusa/" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/world-food-program-usa/?" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/user/WorldFoodProgramUSA" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@wfpusa" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center text-sm space-x-4 mb-2">
            <a href="https://www.wfpusa.org/careers/" className="hover:underline">
              Careers
            </a>
            <span>|</span>
            <a href="https://www.wfpusa.org/financials/" className="hover:underline">
              Financials
            </a>
            <span>|</span>
            <a href="https://www.wfpusa.org/financials/privacy-policy/" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://www.wfpusa.org/financials/refund-policy/" className="hover:underline">
              Refund Policy
            </a>
            <span>|</span>
            <a href="https://www.wfp.org/" className="hover:underline">
              WFP.org
            </a>
          </div>

          <div className="text-center text-xs">
            © 2025 World Food Program USA. World Food Program USA is a nonprofit 501(c)(3) public charity (tax ID#
            13-3843435)
          </div>
        </div>
      </div>
    </footer>
  )
}
