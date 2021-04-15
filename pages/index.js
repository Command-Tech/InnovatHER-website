import { useEffect } from "react"
import Link from "next/link"
import HeadObject from "../components/head"
import Nav from "../components/nav"

export default function Home() {
  useEffect(() => {
    console.log("Ella was here. https://ella.is-a.dev")
  })

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main>
        <section>
          <h3>Girl Genius x Command Tech</h3>
          <h1>InnovatHER</h1>
          <h1>community highlights</h1>
          <button className="rounded-full text-white font-montserrat bg-blue-400 px-5 py-1 shadow-md">
            <Link href="/">
              <a>Get started</a>
            </Link>
          </button>
        </section>
        <section>
          <h2>About</h2>
          <div>
            <div>
              <p>
                Command Tech x Girl Genius InnovatHER 2021 aims to celebrate
                YOUR accomplishments, no matter how big or how small! We want to
                create an online community to support each other so we can all
                build our own confidence and become a future LEADER! A bonus,
                there are prizes!
              </p>
            </div>
            <div>
              <img src="" alt="idk" />
            </div>
          </div>
        </section>
        <section>
          <h2>Get Started</h2>
          {/** card components */}
        </section>
        <section>
          <h2>Get Involved</h2>
          <p>
            Looking to get involved with Girl Genius Magazine or Command Tech?
            Look no further! Join the growing community on the Girl Genius Slack
            or Command Tech Discord using the links below.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <button>
              <Link href="/">
                <a>Join Slack</a>
              </Link>
            </button>
            <button>
              <Link href="/">
                <a>Join Discord</a>
              </Link>
            </button>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
