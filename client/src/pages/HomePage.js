import React from 'react'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import CreateModal from '../components/CreateModal'

export default function HomePage() {
  return (
    <div >
        <Header/>
        <Menu/>
        <Dashboard/>
        <CreateModal/>
        <Footer/>
    </div>
  )
}
