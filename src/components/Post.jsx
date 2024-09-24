import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import style from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name} </strong>
                        <span>{author.role} </span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativetoNow}
                </time>
            </header>
            <div className={style.content}>
                {content.map((line, index) => {
                    if (line.type === "paragraph") {
                        return <p key={index}>{line.content}</p>; // Usando a chave aqui
                    } else if (line.type === "link") {
                        return (
                            <p key={index}>
                                <a href="#">{line.content}</a>
                            </p>
                        ); // Corrigido para usar a condição e chave
                    }
                    return null; // Retorne null se não corresponder a nenhum tipo
                })}
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
