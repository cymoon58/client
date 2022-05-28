/*eslint-disable @next/next/no-img-element*/
import Head from 'next/head';
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
      setPokemon(await res.json());
    }
  getPokemon();
   
  }, [])
  
  return (
    <>
    <Head>
      <title>Pokemon Lists</title>
    </Head>
      <div className={styles.grid}>
     {
       pokemon.map((pokemon) => {
        return(
          <div className={styles.card} key={pokemon.id}>
           <Link href={`/pokemon/${pokemon.id}`}>
            <a>
            <img 
           src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
           alt={pokemon.name}
           />
            </a>
           </Link>
           <h3>{pokemon.name}</h3>
         </div>
        ) 
       })
     }
    </div>
    </>
  )
    
}
