import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "./global.css"
import stylesApp from "./App.module.css"

export function App() {
  return (
    <>
      <Header />
      <div className={stylesApp.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}
