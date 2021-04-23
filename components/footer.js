import { FiGithub } from "react-icons/fi"
import { RiCommandFill } from "react-icons/ri"
import { CgGirl } from "react-icons/cg"
export default function Footer() {
  return (
    <div className="text-gray-500 text-center pb-8">
      <p>Made with 💖 and 👩‍💻 by the team.</p>
      <p className="uppercase font-semibold text-gray-300">
        Copyleft Command Tech x Girl Genius 2021.
      </p>
      <span className="flex justify-center p-5 space-x-3">
        <a href="https://github.com/eilla1/InnovatHER-website">
          <FiGithub size={30} />
        </a>
        <a href="https://commandtech.codes">
          <RiCommandFill size={30} />
        </a>
        <a href="https://girlgeniusmag.tech">
          <CgGirl size={30} />
        </a>
      </span>
    </div>
  )
}
