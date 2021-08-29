import Head from 'next/head'
import Nav from '../components/Nav'
import Carousel from '../components/About-Carousel'
import Image from 'next/image'

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import styles from '../styles/Home.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {
  return (
    <div className={styles['image-container']}>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta charSet='utf-8'/>
      <Image src='/bg.jpg' alt="typing image"
      layout="responsive"
      width={700}
      height={275} className={styles['hero-image']}/>
      <h1 className={styles['hero-heading']}>Learn from the best</h1>
      <section className={styles['about-desc-container']}>
        <ul className={styles['about-desc']}>
          <li className={styles['about-desc']}>1</li>
          <li className={styles['about-desc']}>2</li>
          <li className={styles['about-desc']}>3</li>
        </ul>
      </section>
    </div>
  )
}
