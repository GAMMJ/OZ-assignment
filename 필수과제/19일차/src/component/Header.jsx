import { useCallback, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  const debounceTimer = useRef(null)

  const handleSearchChange = useCallback(
    (e) => {
      const value = e.target.value

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }

      debounceTimer.current = setTimeout(() => {
        navigate(value ? `search?pokemon=${value}` : "/")
      }, 300)
    },
    [navigate],
  )

  return (
    <header>
      <h1 className="border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center">포켓몬 도감</h1>
      <nav className="py-[10px] flex gap-[20px] justify-center bg-white text-black">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <input onChange={handleSearchChange} className="w-[120px] border-b border-[darkgray] px-2 outline-none" />
          <span>🔎</span>
        </div>
      </nav>
    </header>
  )
}
