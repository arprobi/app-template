import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Applayout from '../layouts/AppLayout'

import HomePage from '../pages/Home'
import ProfilePage from '../pages/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Applayout />}>
      <Route index element={<HomePage />} />
      <Route path='profile' element={<ProfilePage />} />
    </Route>
  )
)

export default router
