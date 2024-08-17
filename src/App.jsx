import Post from "./Post"
import { Header } from "./components/Header"
import "./global.css"
import stylesApp from "./App.module.css"
export function App() {
  return (
    <>
      <Header />
      <div className={stylesApp.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="Hendrickson Weib"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, officia voluptatibus. Ab ipsa corporis fugit culpa, soluta iusto voluptate deleniti accusamus expedita non nam praesentium impedit eius aut, voluptatum possimus."
          />
          <Post
            author="Hendrickson Weib"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, officia voluptatibus. Ab ipsa corporis fugit culpa, soluta iusto voluptate deleniti accusamus expedita non nam praesentium impedit eius aut, voluptatum possimus."
          />
        </main>
      </div>
    </>
  )
}
