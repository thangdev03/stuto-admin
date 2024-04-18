import React, { useEffect, useState } from 'react'
import PieChart from '../components/PieChart'
import LineChart from '../components/LineChart'
import { MdReport } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { useAuthContext } from "../hooks/useAuthContext"
import { getFluctuationRate } from '../services/statisticHandler';
import { createPieData } from '../services/const';

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [clients, setClients] = useState([]);
  const [majors, setMajors] = useState([]);
  const [state, dispatch] = useAuthContext();
  const { user } = state;
  const roomFluctuationRate = getFluctuationRate(rooms);
  const clientFluctuationRate = getFluctuationRate(clients);
  const pieData = createPieData(majors)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("https://stuto-api.onrender.com/room/statistic/" + user.id);
        const data = await response.json();
        if (data) {
          setRooms(data);
        } else {
          console.log("Not any rooms found");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchRooms();
  },[user.id])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://stuto-api.onrender.com/user");
        const data = await response.json();
        if (data) {
          const result = [];
          data.data.forEach(item => {
            result.push(item.info)
          });
          setClients(result);
        } else {
          console.log("Not any clients found");
        }
      } catch (error) {
        console.log(error);
      }
    }

    const fetchMajors = async () => {
      try {
        const response = await fetch("https://stuto-api.onrender.com/major")
        const data = await response.json()
        if (data) {
          const result = data.data.sort((a, b) => b.referenceCount - a.referenceCount)
          setMajors(result)
        }
      } catch (error) {
        console.log("Not any majors found");
      }
    }

    fetchMajors();
    fetchUsers();
  },[])

  return (
    <div className="mt-16 py-10 px-10">
      {/* Biểu đồ cột/ đường về số người học trên hệ thống qua thời gian */}
      <div className="w-full grid grid-cols-4 gap-4">
        <div className="flex justify-between bg-white px-4 py-6 rounded-lg">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#A0AEC0] text-sm">Báo cáo hôm nay</span>
            <span className="font-semibold text-lg">1200</span>
            <span className={`text-green-600 font-semibold text-sm`}>+12%</span>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-primaryColor">
              <MdReport className="text-2xl text-white"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-white px-4 py-6 rounded-lg">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#A0AEC0] text-sm">Tổng số phòng học</span>
            <span className="font-semibold text-lg">{rooms.length}</span>
            <span className={`${roomFluctuationRate > 0 ? "text-green-600" : "text-red-600"} font-semibold text-sm`}>{roomFluctuationRate > 0 && ("+" + roomFluctuationRate)}%</span>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-primaryColor">
              <RiHomeOfficeFill className="text-2xl text-white"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-white px-4 py-6 rounded-lg">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#A0AEC0] text-sm">Người dùng mới</span>
            <span className="font-semibold text-lg">{clients.length}</span>
            <span className={`${clientFluctuationRate > 0 ? "text-green-600" : "text-red-600"} font-semibold text-sm`}>{clientFluctuationRate > 0 && ("+" + clientFluctuationRate)}%</span>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-primaryColor">
              <IoPersonAdd className="text-2xl text-white"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-white px-4 py-6 rounded-lg">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[#A0AEC0] text-sm">Lượng truy cập</span>
            <span className="font-semibold text-lg">12,005</span>
            <span className={`text-green-600 font-semibold text-sm`}>+12%</span>
          </div>
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-primaryColor">
              <HiOutlineStatusOnline className="text-2xl text-white"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 h-80 grid grid-cols-4 gap-4 ">
        <div className="bg-white rounded-lg col-span-2">
          <PieChart data={pieData} />
        </div>
        <div className="bg-white rounded-lg col-span-2">
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard