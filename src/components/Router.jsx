import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Post from './Post'

export default function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>} />
            <Route path={'/post'} element={<Post/>} />
        </Routes>
    )
}
