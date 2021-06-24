export default function Winner({ src, authorName, projectName, link }) {
  return (
    <div className="rounded-xl border bg-blue-200 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={src}
          alt="Thumbnail image"
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <a href={link}>
          <p className="font-montserrat font-bold text-2xl text-black">
            {projectName}
          </p>
        </a>
        <p className="text-gray-600 font-openSans">{authorName}</p>
      </div>
    </div>
  )
}
