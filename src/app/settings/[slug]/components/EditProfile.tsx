import { useState } from 'react'
import Input from '@/app/components/Input'
import { AiOutlineCamera, AiOutlineEye } from 'react-icons/ai'
import { PiEyeClosedLight } from 'react-icons/pi'
import Button from '@/app/components/Button'
import Image from 'next/image'

function EditProfile({ setShowModal }: { setShowModal: (state: boolean) => void }) {
  const myImageLoader = ({ src }) => {
    return src
  }
  const [view, setView] = useState<boolean>(false)
  const [view1, setView1] = useState<boolean>(false)
  const [view2, setView2] = useState<boolean>(false)

  return (
    <div
      className={`absolute inset-0 flex justify-center items-center  bg-primary_13/70  `}>
      <form className="w-1/3   h-4/5 bg-primary_10 rounded-xl z-50 flex flex-col gap-3  text-primary_1 justify-center px-6">
        <div className="h-[10%]  flex items-center ">
          <h3 className="font-logirentBold text-2xl">Edit Profile</h3>
        </div>

        <div className="h-15%  w-fit m-auto relative ">
          <div className="absolute bottom-2 max-h-fit rounded-full p-2 bg-primary_9 text-primary_7 flex items-center justify-center right-0">
            <AiOutlineCamera size={25} />
          </div>
          <Image
            src="/avatars/avatar-1.png"
            alt="profile pic"
            loader={myImageLoader}
            unoptimized
            width={40}
            height={40}
            className="h-32 w-32 rounded-full"
          />
        </div>

        <div className="h-[15%] flex  gap-2">
          <div className="w-[50%] h-full flex flex-col gap-2">
            <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
              First name
            </label>

            <div className="flex flex-grow border border-primary_8 px-4 rounded-xl relative">
              <Input type="text" placeholder="David" className="bg-transparent pr-12" />
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-2">
            <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
              Last name
            </label>

            <div className="flex flex-grow border border-primary_8 px-4 rounded-xl relative">
              <Input type="text" placeholder="Ayegoro" className="bg-transparent pr-12" />
            </div>
          </div>
        </div>
        <div className="h-[15%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            Username
          </label>

          <div className="flex flex-grow border border-primary_8 px-4 rounded-xl relative">
            <Input
              type="text"
              placeholder="Username (optional)"
              className="bg-transparent pr-12"
            />
          </div>
        </div>
        <div className="h-[15%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            Email
          </label>

          <div className="flex flex-grow border border-primary_8 px-4 rounded-xl relative">
            <Input
              type="text"
              placeholder="Email address"
              className="bg-transparent pr-12"
            />
          </div>
        </div>
        <div className="h-[15%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            Bio
          </label>

          <div className="flex flex-grow border border-primary_8 px-4 rounded-xl relative">
            <textarea
              placeholder="About you (optional)"
              className="bg-transparent pr-12 w-full resize-none outline-none focus:ring-0  py-2"></textarea>
          </div>
        </div>

        <div className="h-[10%] flex  gap-4 justify-end items-center">
          <Button
            onClick={() => setShowModal(false)}
            className="bg-primary_12 px-6 h-fit py-3">
            Cancel
          </Button>
          <Button className="bg-primary_11 text-primary_7 px-6 h-fit py-3">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
