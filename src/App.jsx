import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "./global.css"
import stylesApp from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/137108361?v=4',
      name: "Hendrickson Weib",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa..." },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-09-04 09:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/maykbrito.png',
      name: "miyk brito",
      role: "Web Developer backend"
    },
    content: [
      { type: 'paragraph', content: "Fala oi 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa..." },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-09-02 20:00:00")
  },
]


export function App() {
  return (
    <>
      <Header />
      <div className={stylesApp.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}  // Adicione a chave aqui
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </>
  )
}
