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

            <Button href={"https://pump.fun"} text={'TOKEN'}/>
          </div>
        </div>
      </MainPageGraphic>

      <section className="grid grid-cols-2">
        <section className="mt-8 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">About WFP USA</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
            Insert random junk paragraph about WFP USA. Money money money, money, money money? Money money.
            Money money, money - money (money)? Blockchain money money money, blockchain Bitcoin money,
            WFP USA Bitcoin money.
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
          WFP USA is the United States branch of the United Nations World Food Programme, working to support global efforts to end hunger through innovation and partnerships.
          As humanitarian needs grow, WFP USA explores emerging technologies like blockchain and cryptocurrency to expand donor reach and improve transparency.
          Our mission is to mobilize American policymakers, businesses, and individuals 
          to contribute to a world free from hunger — and our embrace of crypto innovation reflects that drive.
          </div>
        </section>

        <section className="mt-16 h-fit flex flex-col">
          <h2 className="font-halden text-[#007dbc] capitalize text-5xl">Random Section</h2>

          <div className="mt-2 text-lg font-inter text-black mx-[5%]">
            Insert random junk paragraph about WFP USA. Money money money, money, money money? Money money.
            Money money, money - money (money)? Blockchain money money money, blockchain Bitcoin money,
            WFP USA Bitcoin money.
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
