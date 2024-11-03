'use client'
import { useState } from 'react'
import { AppLayout } from '../components/appLayout'
import Button from '../components/Button'
import { RxExit } from 'react-icons/rx'
import { LuUser2 } from 'react-icons/lu'
import { VscLock } from 'react-icons/vsc'
import { GoBell } from 'react-icons/go'
import ChangePassword from './components/ChangePassword'
import NotificationSettings from './components/NotificationSettings'
import Link from 'next/link'

export default function Settings() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false)

  return (
    <main className="bg-primary_13 relative">
      <AppLayout>
        {showModal && <ChangePassword setShowModal={setShowModal} />}
        {showNotificationModal && (
          <NotificationSettings setShowNotificationModal={setShowNotificationModal} />
        )}
        <section className="h-full w-full  text-primary_1 pt-20 pb-6 flex  gap-8">
          <div className="h-full   w-[80%] overflow-y-auto px-10  flex flex-col gap-8 ">
            <Link
              href="/settings/user"
              className="w-full border border-primary_7 h-16 rounded-xl flex space-x-4 items-center  text-primary_7 px-4 cursor-pointer">
              <LuUser2 size={20} />
              <p className="font-semibold text-primary_1">Profile</p>
            </Link>
            <div
              onClick={() => setShowModal(true)}
              className="w-full border border-primary_7 h-16 rounded-xl flex space-x-4 items-center  text-primary_7 px-4 cursor-pointer">
              <VscLock size={20} />
              <p className="font-semibold text-primary_1">Security</p>
            </div>
            <div
              onClick={() => setShowNotificationModal(true)}
              className="w-full border border-primary_7 h-16 rounded-xl flex space-x-4 items-center  text-primary_7 px-4 cursor-pointer">
              <GoBell size={20} />
              <p className="font-semibold text-primary_1">Notification</p>
            </div>
          </div>
          <div className="h-full w-[20%]">
            <Button className="w-36 justify-center py-4">
              <RxExit size={20} /> Log out
            </Button>
          </div>
        </section>
      </AppLayout>
    </main>
  )
}
