import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Post from './Post'
import Sigin from './Sigin'
import Register from './Register'

export default function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>} />
            <Route path={'/post'} element={<Post/>} />
            <Route path={'/user'} element={<Sigin/>} />
            <Route path={'/register'} element={<Register/>} />
        </Routes>
    )
}
