import { style } from "./Comment.module.css"

export function Comment() {
    return (
        <div className={style.comment}>
            <img className={style.avatar} src="https://avatars.githubusercontent.com/u/137108361?v=4" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>

                    </header>
                    <p></p>
                </div>
                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}
