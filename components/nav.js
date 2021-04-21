import Link from "next/link"
import { useEffect } from "react"
// import { BsCircleHalf } from "react-icons/bs"
// import { useTheme } from "next-themes"

const links = [
  { label: "Home", href: "/" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Gallery", href: "https://airtable.com/shrMBfy9t74j8PAxc" },
  { label: "Submit", href: "https://airtable.com/shrxwr2YZHePwD5wz" },
  { label: "Contact", href: "mailto:info@commandtech.codes" },
]

export default function Nav() {
  // const { theme, setTheme } = useTheme()
  useEffect(() => {
    console.log("https://ella.is-a.dev")
  })
  return (
    <nav className="dark:text-white font-montserrat text-semibold hover:no-underline">
      <ul className="flex flex-wrap items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li></li>
        <ul
          className={`mx-auto sm:mx-0 flex flex-wrap md:flex-row md:space-x-5`}
        >
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 hover:no-underline hover:text-gray-700`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          {/* <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                document
                  .querySelector("#theme_toggle")
                  .classList.toggle("rotate-180")
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
              id="theme_toggle"
            >
              <BsCircleHalf size={24} />
            </button>
          </li> */}
        </ul>
      </ul>
    </nav>
  )
}
