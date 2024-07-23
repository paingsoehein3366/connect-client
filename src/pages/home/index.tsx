import { Pill, PillsInput, Text, Title } from "@mantine/core";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaTrainSubway } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import Train from "./components/train";

export const Home = () => {
  const [trainOpen, setTrainOpen] = useState(false);
  return (
    <div className="flex bg-bg">
      <div className="flex flex-col items-center p-10 w-[50%] h-screen justify-center">
        <div>
          <Text className="bg-yellow-300 w-fit p-2">掲載物件数 25,834 件</Text>
          <Title order={3}>外国人専門のお部屋探しは</Title>
        </div>
        <div className="flex my-10">
          <div onClick={() => setTrainOpen(true)} className="rounded-full bg-gray-100 p-1 w-36 h-36 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-gray-200">
            <FaTrainSubway className="text-[50px] m-3" />
          </div>
          <div className="rounded-full bg-gray-100 p-1 w-36 h-36 flex justify-center items-center mx-5 cursor-pointer transition duration-300 hover:bg-gray-200">
            <FaMapLocationDot className="text-[50px] m-3 text-" />
          </div>
          <div className="rounded-full bg-gray-100 p-1 w-36 h-36 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-gray-200">
            <FcAlarmClock className="text-[50px] m-3 text-" />
          </div>
        </div>
        <div>
          <PillsInput
            variant="filled"
            rightSection={<CiSearch className="cursor-pointer text-blue-500" />}
            size="md"
          >
            <Pill.Group className="cursor-pointer">
              <Text>目的は?</Text>
              <Pill>地域</Pill>
              <Pill>留学</Pill>
              <Pill>就職</Pill>
              <PillsInput.Field placeholder="入力して下さい" />
            </Pill.Group>
          </PillsInput>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.563625639476!2d96.1449438764389!3d16.79837244861225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb5e3fffe455%3A0xb7d3ad319654cf6e!2sShwedagon%20Pagoda!5e0!3m2!1sen!2snl!4v1721729186830!5m2!1sen!2snl"
          width="600"
          height="450"
          className="border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
        {/* <Image src={map} className="w-[50%] h-[50%] rounded-lg" /> */}
      </div>
      <Train open={trainOpen} setOpen={() => setTrainOpen(false)} />
    </div>
  )
}

