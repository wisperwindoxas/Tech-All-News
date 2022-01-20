import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from './Post'
import Sigin from './Sigin'
import Register from './Register'
import PostBlog from './PostBlog'
import Mian from './Mian'

export default function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<Mian/>} />
            <Route path={'/:id'} element={<PostBlog/>} />
            <Route path={'/post'} element={<Post/>} />
            <Route path={'/user'} element={<Sigin/>} />
            <Route path={'/register'} element={<Register/>} />
        </Routes>
    )
}
