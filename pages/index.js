import { useEffect } from "react"
import Link from "next/link"
import HeadObject from "../components/head"
import Nav from "../components/nav"
import Sponsor from "../components/sponsor"
import Footer from "../components/footer"
import { AiOutlineSlack } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import Step from "../components/step"
import Winner from "../components/winner"

export default function Home() {
  useEffect(() => {
    console.log("Ella was here. https://ella.cx")
  })

  return (
    <div className="dark:text-white dark:bg-gray-700">
      <HeadObject />
      <Nav />
      <main className="p-8 md:p-24">
        <section className="flex flex-col md:flex-row items-center space-x-10 bg-purple-200 -mx-8 md:-mx-24 pt-24 -mt-48">
          <div className="space-y-5 p-8 md:p-24">
            <p className="-mb-5 dark:text-gray-600">
              Girl Genius x Command Tech
            </p>
            <h1 className="text-left text-5xl md:text-7xl dark:text-gray-600">
              InnovatHER
            </h1>
            <h1 className="text-left font-semibold text-gray-600 text-2xl md:text-3xl">
              community highlights
            </h1>
            <button className="rounded-full text-white font-montserrat bg-blue-400 px-5 py-1 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="/guidelines">
                <a className="text-white hover:text-white hover:no-underline">
                  Get started
                </a>
              </Link>
            </button>
          </div>
          <div>
            <img
              src="https://cloud-qq4sqiw87-hack-club-bot.vercel.app/0crop_wis_history.png"
              alt="women in stem history"
              className="w-72 flex-end"
            />
          </div>
        </section>
        <section className="mt-24">
          <h2>About</h2>
          <div className="flex flex-col justify-center md:flex-row space-x-5">
            <div>
              <p>
                Command Tech x Girl Genius InnovatHER 2021 aims to celebrate
                YOUR accomplishments, no matter how big or how small! We want to
                create an online community to support each other so we can all
                build our own confidence and become a future LEADER! A bonus,
                there are prizes!
              </p>
              <br></br>
              <p>
                <b>Thanks for participating in this year's event!</b>
              </p>
            </div>
            <div>
              <img
                src="https://cloud-5ydsuceme-hack-club-bot.vercel.app/0img_0325.png"
                alt="Woman with brain"
                className="w-1/2"
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="leading-loose">Winners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Winner
              src="https://cdn.discordapp.com/attachments/820189023384633344/844479367236943902/unknown.png"
              authorName="Sophie R Krajmalnik"
              projectName="Optimizing Automotive Seating Position"
              link="https://airtable.com/shrMBfy9t74j8PAxc"
            />
            <Winner
              src="https://dl.airtable.com/.attachmentThumbnails/02c75508fb697a67e80984f8fdb7f38d/7efa132c"
              authorName="Tiya Madhavan"
              projectName="The Mask of 2020"
              link="https://airtable.com/shrMBfy9t74j8PAxc"
            />
            <Winner
              src="https://dl.airtable.com/.attachmentThumbnails/275d7d35ca3f645cd2e7b203ee17ece5/625736c0"
              authorName="Tiffany Yu"
              projectName="Modem Health"
              link="https://airtable.com/shrMBfy9t74j8PAxc"
            />
            <Winner
              src="https://cloud-5ydsuceme-hack-club-bot.vercel.app/0img_0325.png"
              authorName="Jyothikaa Ramann"
              projectName="CarC SPY: AI-based Biosensor for Early Cancer Detection"
              link="https://projectboard.world/isef/project/bchm012---ai-based-biosensor-for-early-cancer-detection?rc=46080c52-5f16-498e-8266-171fa3e62910"
            />
          </div>
        </section>
        {/* <section>
          <h2>Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step icon="/read.png" text="1. Read the guidelines" />
            <Step icon="/send.png" text="2. Submit a project" />
            <Step icon="/book.png" text="3. View the gallery" />
          </div>
        </section> */}
        <section>
          <h2>Connect</h2>
          <p className="pb-4">
            Looking to get involved with Girl Genius Magazine or Command Tech
            post event? Look no further! Join the growing community on the Girl
            Genius Slack or Command Tech Discord using the links below.
          </p>
          <div className="flex flex-row space-x-2 md:space-x-5 justify-center">
            <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 text-white px-4 py-1 rounded-full">
              <Link href="https://girlgeniuscommunity.slack.com">
                <a className="flex flex-row items-center text-base font-montserrat hover:text-white text-white hover:no-underline">
                  <AiOutlineSlack /> Join Slack
                </a>
              </Link>
            </button>
            <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-purple-500 px-4 py-1 rounded-full">
              <Link href="https://bit.ly/ct-discord">
                <a className="flex flex-row items-center text-base font-montserrat hover:text-white text-white hover:no-underline">
                  <FaDiscord /> Join Discord
                </a>
              </Link>
            </button>
          </div>
        </section>
        <section>
          <h2>Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 space-y-4">
            <Sponsor
              logo="https://girlgeniusmag.tech/footerlogo.png"
              name="Girl Genius"
              website="https://girlgeniusmag.tech"
            />
            <Sponsor
              logo="https://static.wixstatic.com/media/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.png/v1/fill/w_344,h_306,al_c/03c756_20f50deab67a4fc5a466bb41d3c4ea2e~mv2.png"
              name="Silicon Valley 4 u"
              website="https://www.siliconvalley4u.com/"
            />
            <Sponsor
              logo="https://cdn.discordapp.com/attachments/820189023384633344/830668235338285057/logo.png"
              name="Command Tech"
              website="https://commandtech.codes"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
