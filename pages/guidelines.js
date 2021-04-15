import Link from "next/link"
import HeadObject from "../components/head"
import Nav from "../components/nav"
import Question from "../components/question"
import Footer from "../components/footer"
// https://airtable.com/shrxwr2YZHePwD5wz
export default function Guidelines() {
  return (
    <div>
      <HeadObject />
      <Nav />
      <div>
        <h1>Guidelines</h1>
        <p className="text-center mx-8 md:mx-24">
          Interested in participating? Get started here by reading the
          guidelines below. You can submit a project{" "}
          <Link href="https://airtable.com/shrxwr2YZHePwD5wz">here</Link>{" "}
          afterwards!
        </p>
      </div>
      <main>
        <section className="-mt-8">
          <div>
            <h2>👋🏼 Hey there!</h2>
            <p>
              We're super excited that you're interested in participating in
              InnovatHER! Now, there will be prizes, but the focus of this event
              is to celebrate YOUR accomplishments—no matter how big or how
              small! We are confident that anyone can pursue careers in STEAM
              and challenge conventional gender standards.
            </p>
          </div>
          <div>
            <h2>🤔 Wait... but why?</h2>
            <p>
              Sometimes, all the big accomplishments are celebrated so much that
              the little ones are overlooked. Since it's Women's History month,
              we need to recognize the current women who are contributing to
              history, starting with all of you. Even if it's the start of your
              STEAM journey, Girl Genius and Command Tech want to recognize the
              steps you are taking to build your dream projects with InnovatHER.
            </p>
          </div>
          <div>
            <h2>👩🏽‍💻 Eligibility</h2>
            <ul role="list" className="list-disc list-inside font-openSans">
              <li>Identify as female or nonbinary (trans-inclusive)</li>
              <li>Be a high school or college student</li>
              <li>
                Created a project (either group or solo) that falls into one of
                these categories: Science, Technology, Engineering, Art, Math,
                Interdisciplinary. The project can be in-progress or completed!{" "}
                <strong>
                  <em>
                    All projects must be your own original work otherwise you
                    will be disqualified.
                  </em>
                </strong>
              </li>
              <li>
                Follow Girl Genius{" "}
                <a href="https://instagram.com/girlgeniusmag">
                  (@girlgeniusmag)
                </a>{" "}
                and Command Tech{" "}
                <a href="https://instagram.com/commandtech">(@commandtech)</a>{" "}
                on Instagram (we will be checking!)
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>❓ FAQ</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Question title="What should I submit?">
              Check out our notion page for project tutorials, ideas, and other
              resources you can use to create your project.
            </Question>
            <Question title="Can I submit multiple projects?">
              Yes, you can submit multiple projects, but are focusing on the
              quality of your submissions, rather than the quantity.
            </Question>
            <Question title="Is this opportunity open internationally?">
              Yes! International students can submit projects. There are no
              geographical limits.
            </Question>
            <Question title="How will submissions be judged?">
              Judging details are currently being finalized. Contact us if you
              have any questions or concerns!
            </Question>
            <Question title="How can I view everyone else's projects?">
              View projects on the gallery <Link href="/">here</Link>!
            </Question>
            <Question title="I have another question.">
              Feel free to ask us on Slack or Discord, or email
              info@commandtech.codes!
            </Question>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
