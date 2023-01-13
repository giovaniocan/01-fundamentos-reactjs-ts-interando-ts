import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
    content:string;
    onDeleteComment: (comment:string) => void
}

export function Comment({ content, onDeleteComment }:CommentProps) {

    const [likeCount, setLikeLCount] = useState(0); /*sempre inicia o estado com o tipo de informação que vai guardar nele */


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeLCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Tav1nnn.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jv rei delas</strong>
                            <time title="21 de setembro as 8:58" dateTime="2022-05-11 20:55:00">Cerca de 1 hora atras</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="deletar comentario"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}