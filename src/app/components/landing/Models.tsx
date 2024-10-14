import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { VscSearch } from 'react-icons/vsc'
import Input from '../Input'
import Image from 'next/image'

function Models({ setShowModal }: { setShowModal: (state: boolean) => void }) {
  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <div
      className={`absolute inset-0 flex justify-center items-center  bg-primary_13/70 `}>
      <section className="w-2/4  h-3/4 bg-primary_13 rounded-xl z-50 flex flex-col gap-4">
        <div className="h-[13%] flex flex-col gap-3 px-10">
          <div className="h-[30%] flex text-primary_7 justify-end items-center">
            <MdOutlineCancel
              size={25}
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="h-[70%] w-full  rounded-full relative z-60">
            <div className="absolute h-full w-16 top-0 text-primary_7 flex items-center justify-center">
              <VscSearch size={20} />
            </div>
            <Input
              type="search"
              placeholder="search"
              className="pl-16 pr-10 rounded-full z-50 bg-primary_10"
            />
          </div>
        </div>

        <div className="px-10 overflow-y-auto relative h-[87%]">
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
          <div className="border border-primary_7 mb-6 space-x-4 rounded-3xl flex text-primary_1 h-14 min-h-14 px-6 items-center">
            <Image
              src="/avatars/avatar-8.png"
              alt="profile pic"
              loader={myImageLoader}
              unoptimized
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span>GPT-4.0</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Models
