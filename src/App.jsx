import Post from "./Post"
import { Header } from "./components/Header"
import "./global.css"
export function App() {
  return (
    <>
      <Header />
      <Post
        author="Hendrickson Weib"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, officia voluptatibus. Ab ipsa corporis fugit culpa, soluta iusto voluptate deleniti accusamus expedita non nam praesentium impedit eius aut, voluptatum possimus."
      />
    </>
  )
}
