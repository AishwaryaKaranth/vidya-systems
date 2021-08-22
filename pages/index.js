import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles['hero-image']}>
      <img src='/bg.jpg'></img>
    </div>
  )
}
