'use client'
import { useEffect, useState } from 'react'
import { AppLayout } from '../components/appLayout'
import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa6'
import { RxDownload } from 'react-icons/rx'
import Button from '../components/Button'
import { BsChatRightDots } from 'react-icons/bs'
import { CiShare1 } from 'react-icons/ci'
import { PiPaperclip } from 'react-icons/pi'
import { HiOutlineArrowRightCircle } from 'react-icons/hi2'
import ChatInput from '../components/ChatInput'

export default function Home() {
  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <main className="bg-primary_13 relative">
      <AppLayout>
        <section className="h-full w-full text-primary_1 pt-10 pb-6 flex flex-col gap-8">
          <div className="text-xl  h-[20%]  items-center  border border-primary_7 rounded-xl flex justify-between px-8">
            <div className="flex  space-x-5">
              <Image
                src="/avatars/avatar-8.png"
                alt="profile pic"
                loader={myImageLoader}
                unoptimized
                width={40}
                height={40}
                className="h-24 w-24   "
              />
              <div className="flex flex-col justify-center gap-4">
                <div>
                  <h3 className="font-semibold text-xl">Crypto dynamics</h3>
                  <p className="text-primary_7 text-sm">Gpt -4.0</p>
                </div>
                <div className="flex space-x-4">
                  <p className="text-sm text-primary_7">Updated Sep, 12 2023</p>
                  <div className="text-primary_7 flex items-center text-sm gap-2">
                    <RxDownload size={18} />
                    <span>12k</span>
                  </div>
                  <div className="text-primary_7 flex items-center text-sm gap-2">
                    <FaRegHeart size={18} />
                    <span>127</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full flex items-end pb-8 space-x-4">
              <Button>
                <BsChatRightDots size={15} />
                <span>New Chat</span>
              </Button>
              <Button>
                <CiShare1 size={15} />
                <span>Share Chat</span>
              </Button>
            </div>
          </div>
          <div className="h-[70%] overflow-y-auto px-8 border border-primary_7 rounded-xl">
            you
          </div>

          <div className="flex border border-primary_7 rounded-xl h-[10%] w-3/4 m-auto ">
            <Button className="w-[5%]  text-primary_7 bg-transparent rounded-none flex justify-start">
              <PiPaperclip size={25} />
            </Button>
            <div className="w-[90%] h-full ">
              <ChatInput
                onSubmit={() => console.log('Submited')}
                placeholder="Chat with GPT -40"
                className="bg-transparent"
              />
            </div>
            <Button className="w-[5%]  text-primary_7 bg-transparent flex justify-end rounded-none">
              <HiOutlineArrowRightCircle size={25} />
            </Button>
          </div>
        </section>
      </AppLayout>
    </main>
  )
}
