import React from 'react'
import style from "./Sidebar.module.css"
export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} 
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--StRkI7Ze--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://codesandtags.github.io/blog/static/0c42bdee6c2a7e213cacc2b33ac3039c/a0304/hero.webp" />
            <div className={style.profile}>
                <strong>Hendrickson Weib</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
