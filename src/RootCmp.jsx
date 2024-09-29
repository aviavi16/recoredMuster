import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'

import { AppHeader } from './cmps/AppHeader'
import { Dashboard } from './pages/Dashboard'
import { PieChart } from './pages/PieChart'
import { LeftSidebar } from './pages/LeftSidebar'
import { Spline } from './pages/Spline'
import { Player } from './cmps/Player'

export function RootCmp() {

    return (
        <div className='main-app'>
                <AppHeader />
                <LeftSidebar />
                <main className='container'>
                    <Routes>
                            <Route path="" element={<HomePage />} />
                            <Route path="/dashboard" element={< Dashboard />} />
                            <Route path="/dashboard/pieChart" element={< PieChart />} />
                            <Route path="/dashboard/analyse" element={< Spline />} />
                            <Route path="/dashboard/player" element={< Player />} />


                    </Routes>
                </main>
        </div>
    )
}


