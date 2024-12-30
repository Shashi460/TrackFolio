import Feed from "../components/Feed"
import Nav from "../components/Nav"
import End from "../components/End"
import Body from "../components/Body"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <Body />
      <Feed />
      <End />
    </main>
  )
}
