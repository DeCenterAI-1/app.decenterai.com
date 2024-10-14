'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { AppLayout } from './components/appLayout'
import Button from './components/Button'
import Image from 'next/image'
import { CgChevronDoubleDownO } from 'react-icons/cg'
import { PiPaperclip } from 'react-icons/pi'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import Input from './components/Input'

export default function Home() {
  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <main className="bg-primary_13">
      <AppLayout>
        <section className="h-full w-full text-primary_1 pt-10 flex flex-col gap-8">
          <div className="h-1/3 w-2/3 m-auto border border-primary_8 rounded-xl flex flex-col justify-center items-center gap-8 ">
            <h2 className="font-logirentRegular text-3xl ">Decenter AI</h2>
            <div className="flex items-center justify-center gap-3">
              <Button className="">
                <Image
                  src="/avatars/avatar-8.png"
                  alt="profile pic"
                  loader={myImageLoader}
                  unoptimized
                  width={40}
                  height={40}
                  className="h-4 w-4   "
                />

                <span> GPT -4o</span>
              </Button>
              <Button className="">
                <Image
                  src="/avatars/avatar-6.png"
                  alt="profile pic"
                  loader={myImageLoader}
                  unoptimized
                  width={40}
                  height={40}
                  className="h-4 w-4   "
                />

                <span className="pr-3"> Web search</span>
              </Button>

              <Button className="">
                <Image
                  src="/avatars/avatar-7.png"
                  alt="profile pic"
                  loader={myImageLoader}
                  unoptimized
                  width={40}
                  height={40}
                  className="h-4 w-4   "
                />

                <span> Claude 3.5</span>
              </Button>

              <Button className="text-xs text-primary_7">
                <span>More </span>

                <CgChevronDoubleDownO size={15} />
              </Button>
            </div>

            <div className="flex border border-primary_9 rounded-xl h-16 w-3/4 ">
              <Button className="w-[10%]  text-primary_7 bg-transparent rounded-none">
                <PiPaperclip size={25} />
              </Button>
              <div className="w-[80%] h-full">
                <Input type="text" placeholder="Start a new chat" />
              </div>
              <Button className="w-[10%]  text-primary_7 bg-transparent rounded-none">
                <IoPaperPlaneOutline size={25} />
              </Button>
            </div>
          </div>
          <div className="h-2/3 w-2/3 m-auto border border-primary_8 rounded-xl ">k</div>
        </section>
      </AppLayout>
    </main>
  )
}
