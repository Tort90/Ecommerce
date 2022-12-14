import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBlog from '../components/HomeBlog'
import Intro from '../components/Intro'
import NewProducts from '../components/NewProducts'

const Home = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
       <div className='zzz'><Intro /></div> 
        <HomeBlog />
      </main>
      <footer className='footer'>
       <div className='yyy'> <Footer /></div>
      </footer>
    </div>
  )
}

export default Home