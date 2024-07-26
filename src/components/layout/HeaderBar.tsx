import { AppShell, Button, Title } from '@mantine/core';
import { FaPhone } from "react-icons/fa6";
import { SiHomeassistant } from "react-icons/si";
import Contact from '../../pages/home/components/contact';
import { useState } from 'react';

const HeaderBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppShell className="flex items-center justify-between bg-[#7cb9d3] p-2 shadow-lg py-8 sticky top-0 z-10">
      <div className="flex justify-between w-full">
        <div className="flex items-center ml-2">
          <div className="flex items-center mx-4">
            <SiHomeassistant />
            <Title className='text-[#fff] ml-2' order={3}>Room</Title>
          </div>
          <div className="flex items-center ml-10">
            <FaPhone color='green' />
            <h2 className="ml-2 text-white">0800-111-6663（無料）</h2>
          </div>
        </div>
        <div className="mr-10">
          <Button className="text-[#fff]" onClick={() => setOpen(true)}>Contact</Button>
        </div>
      </div>
      <Contact open={open} setOpen={() => setOpen(false)} />
    </AppShell>
  )
}

export default HeaderBar
