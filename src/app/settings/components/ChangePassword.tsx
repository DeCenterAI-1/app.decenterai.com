import { useState } from 'react'
import Input from '@/app/components/Input'
import { AiOutlineEye } from 'react-icons/ai'
import { PiEyeClosedLight } from 'react-icons/pi'
import Button from '@/app/components/Button'

function ChangePassword({ setShowModal }: { setShowModal: (state: boolean) => void }) {
  const myImageLoader = ({ src }) => {
    return src
  }
  const [view, setView] = useState<boolean>(false)
  const [view1, setView1] = useState<boolean>(false)
  const [view2, setView2] = useState<boolean>(false)

  return (
    <div
      className={`absolute inset-0 flex justify-center items-center  bg-primary_13/70  `}>
      <form className="w-1/3   h-1/2 bg-primary_10 rounded-xl z-50 flex flex-col gap-3  text-primary_1 justify-center px-6">
        <div className="h-[20%]  flex items-center ">
          <h3 className="font-logirentBold text-2xl">Change Password</h3>
        </div>

        <div className="h-[20%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            Current password
          </label>

          <div className="flex flex-grow border border-primary_7 px-4 rounded-xl relative">
            <div className="absolute top-0 right-4 h-full flex items-center  text-primary_1">
              {!view && (
                <AiOutlineEye
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView(!view)}
                />
              )}
              {view && (
                <PiEyeClosedLight
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView(!view)}
                />
              )}
            </div>
            <Input
              type={view ? 'text' : 'password'}
              placeholder="Enter your secure password here"
              className="bg-transparent pr-12"
            />
          </div>
        </div>
        <div className="h-[20%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            New password
          </label>

          <div className="flex flex-grow border border-primary_7 px-4 rounded-xl relative">
            <div className="absolute top-0 right-4 h-full flex items-center  text-primary_1">
              {!view1 && (
                <AiOutlineEye
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView1(!view1)}
                />
              )}
              {view1 && (
                <PiEyeClosedLight
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView1(!view1)}
                />
              )}
            </div>
            <Input
              type={view1 ? 'text' : 'password'}
              placeholder="Enter your new password here"
              className="bg-transparent pr-12"
            />
          </div>
        </div>
        <div className="h-[20%] flex flex-col gap-2">
          <label htmlFor="pwd1" className="font-archivo text-primary_1 text-sm">
            Repeat password
          </label>

          <div className="flex flex-grow border border-primary_7 px-4 rounded-xl relative">
            <div className="absolute top-0 right-4 h-full flex items-center  text-primary_1">
              {!view2 && (
                <AiOutlineEye
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView2(!view2)}
                />
              )}
              {view2 && (
                <PiEyeClosedLight
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setView2(!view2)}
                />
              )}
            </div>
            <Input
              type={view2 ? 'text' : 'password'}
              placeholder="Repeat password "
              className="bg-transparent pr-12"
            />
          </div>
        </div>

        <div className="h-[20%] flex  gap-4 justify-end items-center">
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

export default ChangePassword
