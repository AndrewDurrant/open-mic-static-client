import React, { Component } from 'react'
import './App.css'

// components
import Nav from '../Nav/Nav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import UserHomePage from '../../routes/UserHomePage/UserHomePage'
import UploadVideoPage from '../../routes/UploadVideoPage/UploadVideoPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Nav />
        </header>
        <main className='App_main'>
          <h2>LANDING PAGE</h2>
          <LandingPage />
          <h2>LOGIN PAGE</h2>
          <LoginPage />
          <h2>REGISTRATION PAGE</h2>
          <RegistrationPage />
          <h2>HOME PAGE</h2>
          <UserHomePage />
          <h2>UPLOAD VIDEO PAGE</h2>
          <UploadVideoPage />
          <h2>NOT FOUND PAGE</h2>
          <NotFoundPage />
        </main>
      </div>
    )
  }
}



export default App;
