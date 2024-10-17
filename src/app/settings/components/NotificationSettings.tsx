import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { VscSearch } from 'react-icons/vsc'
import Image from 'next/image'
import Input from '@/app/components/Input'
import { AiOutlineEye } from 'react-icons/ai'
import { PiEyeClosedLight } from 'react-icons/pi'
import Button from '@/app/components/Button'
import ToggleSwitch from '@/app/components/ToggleSwitch'

function NotificationSettings({
  setShowNotificationModal,
}: {
  setShowNotificationModal: (state: boolean) => void
}) {
  const myImageLoader = ({ src }) => {
    return src
  }
  const [view, setView] = useState<boolean>(false)
  const [view1, setView1] = useState<boolean>(false)
  const [view2, setView2] = useState<boolean>(false)

  return (
    <div
      className={`absolute inset-0 flex justify-center items-center  bg-primary_13/70  `}>
      <form className="w-[25%]   h-[35%] min-w-[400px] min-h-[300px] bg-primary_10 rounded-xl z-50 flex flex-col gap-3  text-primary_1  px-6">
        <div className="h-[20%]  flex  pt-6 ">
          <h3 className="font-logirentBold text-2xl">Notification</h3>
        </div>

        <div className="h-[10%] flex flex-col gap-2">
          <p className="text-sm text-primary_7">
            We may still send you important notifications about your account outside of
            your notification settings.
          </p>
        </div>
        <div className="h-[50%] flex  gap-4  items-center border-b border-primary_7">
          <div className=" w-[50%] ">
            <h3 className="font-semibold text-md"> Downloads</h3>
            <p className="text-sm text-primary_7">
              These are notifications for when someone assigns you a task.
            </p>
          </div>

          <div className=" flex flex-col justify-start gap-3">
            <div className="flex gap-2 items-center text-sm">
              <ToggleSwitch initialState={true} />
              Push
            </div>
            <div className="flex gap-2 items-center text-sm">
              <ToggleSwitch initialState={false} />
              Email
            </div>
          </div>
        </div>

        <div className="h-[20%] flex  gap-4  pb-3 justify-end items-center">
          <Button
            onClick={() => setShowNotificationModal(false)}
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

export default NotificationSettings
