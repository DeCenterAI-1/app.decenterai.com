'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { AppLayout } from './components/appLayout'

export default function Home() {
  return (
    <main className="bg-primary_13">
      <AppLayout>
        <section className="h-full w-full">page</section>
      </AppLayout>
    </main>
  )
}
