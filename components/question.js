export default function Question({ title, children }) {
  return (
    <div className="bg-black bg-opacity-5 p-5 rounded-xl">
      <h3 className="mb-1 font-bold text-2xl font-montserrat">{title}</h3>
      <p className="opacity-100 font-openSans">{children}</p>
    </div>
  )
}
