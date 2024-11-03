'use client'
import { useState } from 'react'
import { AppLayout } from '../../components/appLayout'
import Button from '../../components/Button'
import { RxExit } from 'react-icons/rx'
import { LuUser2 } from 'react-icons/lu'
import { VscLock } from 'react-icons/vsc'
import { GoBell } from 'react-icons/go'
import ChangePassword from '../components/ChangePassword'
import NotificationSettings from '../components/NotificationSettings'
import Link from 'next/link'
import { MdChevronLeft } from 'react-icons/md'
import Image from 'next/image'
import { PiHourglassLow, PiPencilSimpleBold, PiPencilSimpleLight } from 'react-icons/pi'
import HistoryList from '@/app/history/components/HistoryList'

export default function Profile() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showNotificationModal, setShowNotificationModal] = useState<boolean>(false)
  const myImageLoader = ({ src }) => {
    return src
  }

  return (
    <main className="bg-primary_13 relative">
      <AppLayout>
        {showModal && <ChangePassword setShowModal={setShowModal} />}
        {showNotificationModal && (
          <NotificationSettings setShowNotificationModal={setShowNotificationModal} />
        )}
        <section className="h-full w-full  text-primary_1 pt-20 pb-6   flex flex-col gap-3">
          <div className="w-full h-[5%] flex">
            <div className="h-full    full px-10  flex  text-primary_7 gap-6 items-center ">
              <button className="bg-transparent flex space-x-4  items-center">
                <MdChevronLeft size={15} />
                <span>Back</span>
              </button>
              <p>
                Settings / <span className="text-primary_1">Profile</span>
              </p>
            </div>
          </div>
          <div className="w-full h-[10%] flex items-center border border-primary_8 rounded-2xl justify-between px-10">
            <h3 className="font-logirentBold text-2xl"> Profile</h3>

            <Button className="w-36 justify-center py-4">DeleteAccount</Button>
          </div>
          <div className=" h-[15%] w-[70%] flex items-center border border-primary_8 rounded-2xl  gap-4 px-10 ">
            <Image
              src="/avatars/avatar-1.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-24 w-24"
            />
            <div className="flex flex-col  justify-center gap-2">
              <h4 className="text-xl">David Ayegoro</h4>
              <p className="text-primary_7 text-sm">davidayegoro@gmail.com</p>
            </div>
            <div className="flex   items-center rounded-full justify-center bg-primary_9 text-primary_6 p-2 ">
              <PiPencilSimpleBold size={25} />
            </div>
          </div>
          <div className=" h-[15%] w-[30%] flex flex-col justify-center border border-primary_8 rounded-2xl  gap-4 px-10 ">
            <h4 className="text-md font-semibold">Total Chats</h4>
            <div className="w-full flex items-end justify-between">
              <p className="text-xl">17</p>
              <PiHourglassLow size={50} className="text-primary_7" />
            </div>
          </div>
          <div className=" h-[55%] w-full py-2 flex flex-col   border-primary_8 rounded-2xl  gap-4 px-10 ">
            <h4 className="text-xl font-semibold h-[5%] "> Chat History</h4>
            <div className="h-[95%] overflow-y-auto px-10  ">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <HistoryList key={index} id={index} />
                ))}
            </div>
          </div>
        </section>
      </AppLayout>
    </main>
  )
}
