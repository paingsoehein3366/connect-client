import { AppShell, Title } from '@mantine/core';
import { FaPhone } from "react-icons/fa6";
import { SiHomeassistant } from "react-icons/si";

const HeaderBar = () => {
  return (
    <AppShell className="flex items-center justify-between bg-[#7cb9d3] p-2 shadow-lg py-8 sticky top-0 z-10">
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
    </AppShell>
  )
}

export default HeaderBar
