import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Applayout from '../layouts/AppLayout'

import DashboardPage from '../pages/Dashboard'
import UserPage from '../pages/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/admin' element={<Applayout />}>
      <Route path='dashboard' index element={<DashboardPage />} />
      <Route path='user' element={<UserPage />} />
    </Route>
  )
)

export default router
