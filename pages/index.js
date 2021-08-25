import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles['image-container']}>
      <img src='/bg.jpg' className={styles['hero-image']}></img>
      <h1 className={styles['hero-heading']}>Learn from the best</h1>
    </div>
  )
}
