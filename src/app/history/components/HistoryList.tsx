import Image from 'next/image'
import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { VscChecklist, VscEllipsis } from 'react-icons/vsc'

function HistoryList({ id }: { id: number }) {
  console.log(id)
  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <>
      <div className="border border-primary_7 mb-6   space-x-4 rounded-3xl flex justify-between text-primary_1 h-16 min-h-14 px-6 items-center">
        <div className="flex items-center h-full space-x-3">
          <Image
            src="/avatars/avatar-8.png"
            alt="profile pic"
            loader={myImageLoader}
            unoptimized
            width={40}
            height={40}
            className="h-10 w-10 rounded-full  "
          />
          <span>GPT-4.0</span>
        </div>

        <div className="flex items-center h-full justify-end  space-x-4 text-primary_7">
          {id % 2 > 0 ? (
            <BsDownload size={20} className="cursor-pointer" />
          ) : (
            <VscChecklist size={20} className="cursor-pointer" />
          )}
          <p className=" tsxt-sm text-primary_7 ">2 minutes ago</p>
          <VscEllipsis size={20} className="cursor-pointer" />
        </div>
      </div>
    </>
  )
}

export default HistoryList
