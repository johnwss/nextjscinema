import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Link from 'next/link';



export default function Home({list}) {
  const [text,setText] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if(text !== ''){
      const result = await fetch(`${process.env.NEXT_PUBLIC_mypageurl}/api/search?myquery=${text}`);
      const json = await result.json();
      setMovieList(json.list);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Busca
        </h1>

<input type='text' value={text} onChange={e=>setText(e.target.value)}/>
termo de busca: {text}
<button onClick={handleSearch}>Buscar</button>
<hr />

<ul>
  {movieList.map(item=>(
    <li>
       <Link href={`/movies/${item.id}`}>
          <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width='150'/><br/>  
          {item.title}
          </Link>  
    </li>
  ))}
</ul>


      </main>

 
    </div>
  )
}


