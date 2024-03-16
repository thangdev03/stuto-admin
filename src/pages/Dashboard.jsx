import React from 'react'
import PieChart from '../components/PieChart'
import LineChart from '../components/LineChart'

const Dashboard = () => {
  return (
    <div className="mt-16 py-10 px-10">
      Dashboard
      <br />
      Tổng hợp về số reports, số người dùng đang online, số người dùng mới trong tháng này, biểu đồ cột/ đường về số người học trên hệ thống qua thời gian
      <div className="h-96">
        <PieChart />
      </div>
      <div className="h-96">
        <LineChart />
      </div>
    </div>
  )
}

export default Dashboard