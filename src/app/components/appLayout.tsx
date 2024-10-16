'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import { useRouter } from '';
import { usePathname } from 'next/navigation'
import imageDecenterLogoWhite from '@public/Logo White.png'
import imageDecenterLogoSubtitle from '@public/Logo Texts.png'
import { IoChevronDownSharp } from 'react-icons/io5'

import { BsChatRightDots, BsDatabase, BsGear } from 'react-icons/bs'
import { GoBell, GoSearch } from 'react-icons/go'
import { AiFillSetting } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'
import Link from 'next/link'

import notIcon from 'public/notification.png'
// import { ModalNotification } from './notifications/components/Notification'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@lib/imageHelper'
import particle from '@/lib/particle'
import { useRouter } from 'next/navigation'
import { MdHistory } from 'react-icons/md'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore()
  const pathname = usePathname()
  const { push, replace } = useRouter()
  const [isNotificationOpen, setNotificationOpen] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)
  const [isProfileOpen, setProfileOpen] = useState(false)

  const openNotification = () => {
    setNotificationOpen(true)
    setShowBackdrop(true)
  }
  const closeNotification = () => {
    setNotificationOpen(false)
    setShowBackdrop(false)
  }

  const openProfile = () => {
    setProfileOpen(!isProfileOpen)
  }
  const handleLogout = async () => {
    await particle.auth.logout()
    console.log('logout')
    localStorage.clear()
    userStore.clearUser()
    // replace('/explore')
    // push('/explore')
  }

  const myImageLoader = ({ src }) => {
    return src
  }
  const userStore = useUserStore()
  return (
    <div className={`w-screen h-screen flex  bg-primary_12 font-archivo `}>
      {showBackdrop && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={closeNotification}
        />
      )}
      <aside className="w-[10%] border-r border-primary_9  h-screen">
        <Link href="/">
          <div className="w-full h-[10%] flex flex-col gap-2 pt-2 items-center justify-center">
            <Image
              src={imageDecenterLogoWhite}
              alt="DECENTER Icon"
              width={50}
              height={150}
              className="max-w-[25%] max-h-[50%]"
            />
            <Image
              src={imageDecenterLogoSubtitle}
              alt="DECENTER Icon"
              width={100}
              height={150}
              style={{ maxWidth: '100%' }}
            />
          </div>
        </Link>
        <div className="w-full h-[90%] overflow-y-auto font-archivo  pt-20">
          <Link href="/">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-6 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <BsChatRightDots size={25} />
              </div>
              <p className="text-sm">Chat</p>
            </div>
          </Link>

          <Link href="/history">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-6 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/history' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <MdHistory size={25} />
              </div>
              <p className="text-sm">History</p>
            </div>
          </Link>
          {/* <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiUsersThree size={25} />
            </div>
            <p className="text-sm">Teams</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiClipboardLight size={25} />
            </div>
            <p className="text-sm">Testing</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiTrophyBold size={25} />
            </div>
            <p className="text-sm">Rewards</p>
          </div> */}
          <Link href="/settings">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-6 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/settings' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <BsGear size={25} />
              </div>
              <p className="text-sm">Settings</p>
            </div>
          </Link>
        </div>
      </aside>

      <main className=" w-[90%] h-screen ">
        <div className="w-full h-[8%] flex items-center   border-b border-primary_9 px-10">
          <div className="h-full w-full flex gap-6 items-center justify-end font-archivo ">
            <div className="text-primary_8  cursor-pointer">
              <GoBell size={25} onClick={openNotification} />
            </div>
            {/* <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
              Connect Wallet
            </button> */}

            {!user ? (
              <>
                <div className="flex items-center bg-primary_11 text-primary_1 font-semibold font-primaryArchivo  px-5  h-14 space-x-3 cursor-pointer rounded-full relative">
                  <button
                    onClick={openProfile}
                    className="flex flex-row items-center w-full gap-3 ">
                    <span className="bg-pink-400 h-8 w-8 rounded-lg "></span>
                    <span className="text-primary_1 text-sm text-center ">
                      0x09f0d0...
                    </span>

                    <IoChevronDownSharp size={20} className="text-primary_7" />
                  </button>
                </div>
                <div className="flex items-center bg-primary_11 text-primary_1 font-semibold font-primaryArchivo px-5 h-14  space-x-3 cursor-pointer rounded-full relative">
                  <button
                    onClick={openProfile}
                    className="flex flex-row items-center gap-3 justify-center ">
                    <Image
                      src="/avatars/avatar-1.png"
                      alt="profile pic"
                      loader={myImageLoader}
                      unoptimized
                      width={40}
                      height={40}
                      className="max-w-[100%] max-h-[100%] rounded-full "
                    />

                    <span className="flex items-center font-semibold font-primaryArchivo">
                      {/* {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)} */}
                      David
                    </span>

                    <IoChevronDownSharp size={20} className="text-primary_7" />
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl relative">
                <button className="flex flex-row" onClick={() => replace('/explore')}>
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-[92%] px-10 relative ">{children}</div>
      </main>
      {isProfileOpen && (
        <div className=" bg-primary_11 px-4 w-[200px] text-primary_6 py-2 rounded-xl top-20  absolute  z-50 right-10">
          <div className="py-4 border-b border-primary_8">
            <Link href="/dashboard/settings/profile" className="flex items-center gap-3">
              <div className="text-primary_8">
                <AiFillSetting size={22} />
              </div>
              Account settings
            </Link>
          </div>
          <div className="py-4">
            <button onClick={handleLogout} className="flex items-center gap-3">
              <div className="text-primary_8">
                <CiLogout size={22} />
              </div>
              LogOut
            </button>
          </div>
        </div>
      )}

      {/* {isNotificationOpen && (
        <aside
          className={`absolute z-50 right-8 mt-14 rounded-3xl max-w-[450px] shadow-xl bg-primary_11 flex flex-col px-4 py-6  gap-6 max-h-screen  `}
        >
          <div className="flex justify-between items-center ">
            <Image src={notIcon} alt="notification" className="w-[30%]" />
            <Link href="/dashboard/notifications" className="text-sm text-[#C1C1C1]">
              View All
            </Link>
          </div>
          <ModalNotification />
          <button>To the top</button>
        </aside>
      )} */}
    </div>
  )
}
