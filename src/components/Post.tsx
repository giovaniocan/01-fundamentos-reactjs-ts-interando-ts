import { format, formatDistanceToNow } from 'date-fns'; /*npm i date-fns*/
import ptBr from 'date-fns/locale/pt-BR';
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({ author, publishedAt, content }: PostProps) {

    const [comment, setComment] = useState([
        'que post legal em camarada'
    ])


    const [newCommentText, setNewCommentText] = useState('')



    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr,
    }) /*https://date-fns.org/v2.29.3/docs/format*/


    const publishDateRalativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })



    function handleCreatNewComment(event: FormEvent) { /*só o form é necessario, pq ele foi dispardo por algum evento do form ( onsubmite,_*/
        event.preventDefault() /*tem que ter, quando vc usa um stado ( quando muda algo na tela )*/


        setComment([...comment, newCommentText]);

        setNewCommentText('')


    }


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) { /*como aqui não é do formulario, e sim da text area vc tem que especificar onde ele essta e qual é o metodo*/
        event.target.setCustomValidity('') /*para arrumar o handlenewcoommentinvalid, pq tem que ter esse espaço vazio para dar certo */
        setNewCommentText(event.target.value);
    }
    
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse negocio é ibrigatorio irmão')
    }


    function deleteComment(commentToDelete:string) {

        const commentWithoutDeleteOne = comment.filter(comment => { /*no metodo filter eu retorno o que eu não quero, ou seja, o que eu retornar ele vai deixar de fora*/
            return comment !== commentToDelete;
        })

        setComment(commentWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0; /*não é bom deoxar comparação no html, por isso a gente cria uma nova variavel para fazer esses testes*/

    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()}>
                    {publishDateRalativeNow}
                </time>
            </header>




            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return (<p key={line.content}>
                            <a href="#"> {line.content}</a>
                        </p>)
                    }
                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForms}>
                <strong>Deixe o seu comentario</strong>

                <textarea
                    placeholder="digite aqui o seu comentario"
                    value={newCommentText}
                    onChange={handleNewCommentChange} /*quando mudar alguma coisa vai chamar essa function */
                    required /* obriga a que esse campo seja obrugatorio ter alguma coisa, quando vc não coloca nada na frente é pq vc ta pssando true*/
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />

                    )
                })}
            </div>

        </article>
    );
}