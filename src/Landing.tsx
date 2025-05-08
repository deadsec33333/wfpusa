import * as React from "react";
import { MainPageGraphic } from "./components/MainPageGraphic";
import { Footer } from "./components/footer/Footer";
import { Button } from "./components/Button";

export const Landing = (): React.ReactElement => {
  return (
    <main className="scroll-smooth text-center">
      <MainPageGraphic href={"/main-graphic.png"} mainText={"Test"}>
        <div>
          <div className="capitalize font-halden text-7xl text-yellow-400">HUNGER EMERGENCIES</div>
          <br/>

          <p className="text-center font-inter text-3xl text-white font-extrabold">Powering food deliveries for the
            world&apos;s hungry.</p>
          <p className="text-center font-inter text-3xl text-white font-extrabold">All through blockchain
            technologies.</p>

          <br/>
          <br/>

          <div className="text-center items-center justify-center flex flex-row space-x-4 w-full">
            <Button href={"https://www.wfpusa.org/ways-to-give/crypto/"} text={"DONATE"}/>

            <Button href={"https://dexscreener.com/solana/AFLnJoZ6Y7B495zh3cpddLMcD2s1TkTehKgREqZjpump"} text={'TOKEN'}/>
          </div>
        </div>
      </MainPageGraphic>

      <section className="grid grid-cols-2">
        <section className="mt-8 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">About WFP USA</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
          WFP USA is the United States branch of the United Nations World Food Programme, working to support global efforts to end hunger through innovation and partnerships.
          As humanitarian needs grow, WFP USA explores emerging technologies like blockchain and cryptocurrency to expand donor reach and improve transparency.
          Our mission is to mobilize American policymakers, businesses, and individuals to contribute to a world
          free from hunger — and our embrace of crypto innovation reflects that drive.
          </div>
        </section>

        <section className="mt-8 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">Launch</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
            In Q3 2024, we received over $2.8M in Solana donations via our "Donate Crypto" program - providing us with a
            pivotal perspective
            on the role of cryptocurrency and the potential of the Solana blockchain in advancing humanitarian goals. We
            believe the decision
            to engage with this technology was a transformative step for the World Food Program.
          </div>
        </section>

        <section className="mt-16 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">Treasury</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
          The treasury fund serves as the backbone of our financial resilience and strategic operations.
          Allocated 0.5% of the token supply, this reserve ensures we can continue development, handle unexpected costs,
          and pursue impactful initiatives without compromising the integrity of the program. Treasury funds are managed
          transparently with the intent to sustain long-term growth and stability for our blockchain-based outreach.
          </div>
        </section>

        <section className="mt-16 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">Liquidity</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
          The liquidity allocation ensures the smooth functioning of the token ecosystem,
          with 0.5% of the supply reserved for maintaining healthy market dynamics.
          By providing liquidity, we enable easier access, reduce slippage for supporters,
          and foster a more stable and transparent environment for token holders.
          This reserve is essential to building trust and facilitating seamless participation
          in our crypto-enabled donation model.
          </div>
        </section>
      </section>

      <section className="w-screen text-center justify-center">
        <img className="mx-auto" src="/treasury.png" width="60%"/>
      </section>
      <Footer/>
    </main>
  );
}
