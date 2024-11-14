
import { useState } from 'react'
import './App.css'
import Banner from './components/header/banner/Banner'
import Navbar from './components/header/navbar/Navbar'
import Players from './components/Players/Players'
import NewsLetter from './components/newsletter/NewsLetter'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer'

function App() {



  const [usersCoin, setUsersCoin] = useState(0);

  const [availablePlayer, setAvailablePlayer] = useState({
    availablePlayer: true,

  })

  const handleSelectedPlayers = (status) => {
    if (status === "available") {

      setAvailablePlayer(

        { availablePlayer: true }

      )

    }
    else {

      setAvailablePlayer({
        availablePlayer: false

      })
    }

  }

  const handleUsersCoin = () => {
    setUsersCoin(usersCoin + 5000000);
    toast.success('5000000 Credit added to your account', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }

  return (
    <>
      <header className='w-10/12 flex flex-col mx-auto mt-10 sora'>
        <Navbar usersCoin={usersCoin}></Navbar>
        <Banner handleUsersCoin={handleUsersCoin}></Banner>
        <Players setUsersCoin={setUsersCoin} usersCoin={usersCoin} availablePlayer={availablePlayer} handleSelectedPlayers={handleSelectedPlayers}></Players>
        <NewsLetter></NewsLetter>
        <ToastContainer />

      </header>
      <footer className='w-full bg-black'>
          <Footer></Footer>
      </footer>
    </>
  )
}

export default App
