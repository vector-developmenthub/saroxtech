import { useState } from "react"

export default function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      {page === "home" && <h1>Welcome</h1>}
      {page === "about" && <h1>About</h1>}
    </>
  )
}
