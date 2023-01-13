import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import style from './App.module.css';

import './global.css';


const post =[
  {
    id:1,
    author: {
      avatarUrl:'https://github.com/Tav1nnn.png', 
      name:'Tavin', 
      role: 'repelente'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-10-02 20:00:00'),

  },
  {
    id:2,
    author: {
      avatarUrl:'https://github.com/giovaniocan.png', 
      name:'Giovani', 
      role: 'aprendiz'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa do mal 👋'},
      {type:'paragraph', content:'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/sla'},
    ],
    publishedAt: new Date('2022-09-29 20:00:00'),

  },
];


export function App() {
  return (
    <div>
    <Header/>

    <div className={style.wrapper}>
      <Sidebar/>
      <main>
        {post.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
     </main>

    </div>

    </div>
  )
}


