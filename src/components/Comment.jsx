import React from "react"
import style from "./Comment.module.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";

export function Comment() {
    return (
        <div className={style.comment}>
            <img className={style.avatar} src="https://avatars.githubusercontent.com/u/137108361?v=4" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <time title='11 de Maio as 08:13' dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <FaRegTrashAlt size={22} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <GoThumbsup />
                        Aplaudir  <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
