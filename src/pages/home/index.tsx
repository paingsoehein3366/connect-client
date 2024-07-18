import { Image, Pill, PillsInput, Text, Title } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaTrainSubway } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import map from './../../assets/images/map.png'
import Train from "./components/train";
import { useState } from "react";

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
        <Image src={map} className="w-[50%] h-[50%] rounded-lg" />
      </div>
      <Train open={trainOpen} setOpen={() => setTrainOpen(false)} />
    </div>
  )
}

