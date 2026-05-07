export default function Navbar() {
  return (
    <div className="fixed w-full bg-gray-800 p-4 flex justify-center gap-6 z-50">
      {["Home","About","Skills","Projects","Experience","Contact"].map(item => (
        <a key={item} href={`#${item}`} className="hover:text-cyan-400">
          {item}
        </a>
      ))}
    </div>
  )
}