import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Card from './components/card'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
   router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/> <Home  page={5} pageSize={6} apiKey={"a9c2209fbfe9ea2159b323d70bd9fd45"}/></> 
    }, 

    {
      path:"/About",
      element:<><Navbar/> <About/></> 
    }, 

    {
      path:"/Sports",
      element:<><Navbar/> <Home key='sports' category='sports' pageSize={6} apiKey={"2917b2deb81a4da28f87b96ea7546513"}/></>
    }, 
    {
      path:"/Entertainment",
      element:<><Navbar/> <Home key='entertainment' category='entertainment' pageSize={6} apiKey={"2917b2deb81a4da28f87b96ea7546513"}/></>
    }, 
    {
      path:"/Health",
      element:<><Navbar/> <Home key='health' category='health' pageSize={6} apiKey={"2917b2deb81a4da28f87b96ea7546513"}/></>
    }, 
    {
      path:"/Science",
      element:<><Navbar/> <Home key='science' category='science' pageSize={6} apiKey={"2917b2deb81a4da28f87b96ea7546513"}/></>
    }, 
    {
      path:"/Technology",
      element:<><Navbar/> <Home key='technology' category='technology' pageSize={6} apiKey={"2917b2deb81a4da28f87b96ea7546513"}/></>
    }, 
  ])
  render() {
    return (
      <div>
        <RouterProvider router={this.router}/>
        
      </div>
    )
  }
}




