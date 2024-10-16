'use client'
import { useEffect, useState } from 'react'
import { AppLayout } from '../components/appLayout'
import HistoryList from './components/HistoryList'

export default function Home() {
  return (
    <main className="bg-primary_13 relative">
      <AppLayout>
        <section className="h-full w-full text-primary_1 pt-10 pb-6 flex flex-col gap-8">
          <h2 className="text-xl  h-[8%]  flex items-center justify-center">
            Chat History
          </h2>
          <div className="h-[92%] overflow-y-auto px-10 ">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <HistoryList key={index} id={index} />
              ))}
          </div>
        </section>
      </AppLayout>
    </main>
  )
}
