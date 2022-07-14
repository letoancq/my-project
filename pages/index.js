import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="w-16 md:w-32 lg:w-48 md:h-28">
      Hello world!
    </h1>
    </div>
  )
}
