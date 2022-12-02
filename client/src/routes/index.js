import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from '../fetaures/books/AddBook'
import ShowBook from '../fetaures/books/BookView'
import EditBook from '../fetaures/books/EditBook'
import Navbar from '../layouts/navbar'
import Error from '../pages/error'
import Home from '../pages/home'
const Index = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/show-books' element={<ShowBook/>}/>
                <Route path='/add-books' element={<AddBook/>}/>
                <Route path='/edit-books' element={<EditBook/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default Index