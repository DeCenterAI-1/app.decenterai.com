'use client'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AppLayout } from './components/appLayout'
import Button from './components/Button'
import Image from 'next/image'
import { CgChevronDoubleDownO } from 'react-icons/cg'
import { PiPaperclip } from 'react-icons/pi'
import { FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6'
import { RxDownload } from 'react-icons/rx'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import Input from './components/Input'
import Models from './components/landing/Models'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <main className="bg-primary_13 relative">
      <AppLayout>
        {showModal && <Models setShowModal={setShowModal} />}
        <section className="h-full w-full text-primary_1 pt-10 pb-6 flex flex-col gap-8">
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

              <Button
                className="text-xs text-primary_7"
                onClick={() => setShowModal(true)}>
                <span>More </span>

                <CgChevronDoubleDownO size={15} />
              </Button>
            </div>

            <div className="flex border border-primary_9 rounded-xl h-16 w-3/4 ">
              <Button className="w-[10%]  text-primary_7 bg-transparent rounded-none">
                <PiPaperclip size={25} />
              </Button>
              <div className="w-[80%] h-full">
                <Input
                  type="text"
                  placeholder="Start a new chat"
                  className="bg-transparent"
                />
              </div>
              <Button className="w-[10%]  text-primary_7 bg-transparent rounded-none">
                <IoPaperPlaneOutline size={25} />
              </Button>
            </div>
          </div>
          <div className="h-2/3 w-4/5 m-auto grid grid-cols-4  gap-4 overflow-y-auto pb-10   px-3">
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 border border-primary_8 h-fit rounded-xl p-3">
              <div className="flex justify-between h-6">
                <div className="rounded-full h-full px-3 text-sm flex items-center text-primary_7 bg-primary_9">
                  Text Generation
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <FaRegHeart size={18} />
                  <span>127</span>
                </div>
              </div>

              <div className="h-28 flex gap-3  items-center">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold">Model name</h3>
                  <p className="text-xs text-primary_7">
                    Identifies a variety of sample im...
                  </p>
                </div>
                <div className="h-3/4 w-2/5 bg-primary_8 rounded-xl p-2"></div>
              </div>

              <div className="flex justify-between h-6">
                <div className="text-primary_7 flex items-center text-sm gap-3">
                  Updated Sep, 12 2023
                </div>

                <div className="text-primary_7 flex items-center text-sm gap-3">
                  <RxDownload size={18} />
                  <span>12k</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </main>
  )
}
