import React from 'react'
import style from "./Post.module.css"
export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://avatars.githubusercontent.com/u/137108361?v=4" />
                    <div className={style.authorInfo}>
                        <strong>Hendrickson Weib</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio as 08:13' dateTime="2022-05-11 08:13:38">Publicado há 1h</time>
            </header>
            <div className={style.content}>
                <p>  Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{" "} <a href=""> jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a>{" "}
                <a href="">#nlw</a>{" "}
                <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}
