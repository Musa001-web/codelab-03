import { SideBar } from '@/components'
import Header from '@/app/dashboard/header'
import React from 'react'


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="lg:pl-72">
        <Header />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>


      <SideBar />
    </>
  )
}