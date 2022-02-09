import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="container">
      <Header/>

      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Caffe</h1>
        <p className="col-md-8 fs-4">온라인으로 주문하고 편하게 커피를 받아보세요!</p>

        <Link href="/introduce">
          <button className="btn btn-primary btn-lg" type="button">카페 소개</button>
        </Link>
        <Link href="/order">
          <button className="btn btn-outline-primary btn-lg ml-2" type="button">주문 하기</button>
        </Link>
      </div>
    </div>

       
    </div>     
  )
}
