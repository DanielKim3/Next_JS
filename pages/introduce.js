import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Introduce(){
    return(
       <div className="container">    
            <Header/>
            <h1>Introduce</h1>
       </div>
    )
}