import React, { useEffect, useState } from "react"
import LoadingSpinner from '../components/LoadingSpinner';
import { MdBlock, MdDelete } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { TbLock, TbLockOpenOff } from "react-icons/tb";


const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);

  const handleRestrict = async (userId, status) => {
    const response = await fetch(`http://localhost:5555/account`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          update_restrict: true,
          user_id: userId,
          is_restricted: !status
        })
      });
      const data = await response.json()
      if (data) {
        setIsSuccess(true)
      }
      // return alert(data.message)
  }

  const handleDelete = async (userId) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa vĩnh viễn người dùng này khỏi hệ thống không?");
    if (confirm) {
      const response = await fetch(`http://localhost:5555/user/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json()
      if (data) {
        setIsSuccess(true)
      }
      // return alert(data.message)
    }
  }

  useEffect(() => {
    setIsSuccess(false)
    setIsLoading(true)
    fetch("http://localhost:5555/user")
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData.data))
      .then(() => setIsLoading(false))
  }, [isSuccess])
  
  return (
    <div className="mt-16 py-10 px-10">
      <div className="flex gap-2">
        <input 
          type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Tìm kiếm"
          className="px-4 py-2 rounded-lg bg-slate-100 border-2 border-slate-300 outline-none transition-all focus:border-slate-400"
        />
      </div>
      <div className="mt-5 rounded-lg overflow-hidden border border-primaryColor/60">
        <div className="pb-8 bg-primaryColor/10">
          <table className="w-full border-collapse text-center table-auto">
            <thead className="bg-primaryColor text-white">
              <tr>
                <th className="w-10">
                  <input type="checkbox" className="h-4 w-4"/>
                </th>
                <th className="w-20 py-2">STT</th>
                <th className="py-2">MÃ SINH VIÊN</th>
                <th className="py-2">HỌ TÊN</th>
                <th className="py-2">EMAIL</th>
                <th className="py-2">CHUYÊN NGÀNH</th>
                <th className="py-2">THỜI GIAN THAM GIA</th>
                <th className="py-2">TRẠNG THÁI</th>
                <th className="w-1/5 py-2">HÀNH ĐỘNG</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={8}>
                    <LoadingSpinner col width={32} height={32} className=""/>
                  </td>
                </tr>
              ) : (
                users
                .sort((a, b) => a.info.name.localeCompare(b.info.name))
                .map((user, index) => {
                  return (
                    <tr 
                      key={index} 
                      className={ !user.info.name.toLowerCase().includes(searchText.toLowerCase()) && "hidden" }
                    >
                      <td className="border-y border-primaryColor/40">
                        <input type="checkbox" id={`checkbox-${index}`} className="h-4 w-4"/>
                      </td>
                      <td className="border-y border-primaryColor/40">{index + 1}</td>
                      <td className="border-y border-primaryColor/40">{user.info.student_id || (<span className="italic text-orange-600">Chưa cập nhật</span>)}</td>
                      <td className="border-y border-primaryColor/40">{user.info.name}</td>
                      <td className="border-y border-primaryColor/40">{user.email}</td>
                      <td className="border-y border-primaryColor/40">{user.info.major || (<span className="italic text-orange-600">Chưa cập nhật</span>)}</td>
                      <td className="border-y border-primaryColor/40">{user.info.createdAt}</td>
                      <td className="border-y border-primaryColor/40">
                        {user.is_restricted ? (
                          <span className="flex items-center justify-center" title="Bị khóa tài khoản"><TbLock className="text-xl text-gray-700"/></span>
                        ) : (
                          user.info.is_active ? (
                          <span className="flex items-center justify-center" title="Online"><BsDot className="text-4xl text-green-500"/></span>
                        ) : (
                          <span className="flex items-center justify-center" title="Offline"><BsDot className="text-4xl text-red-500"/></span>
                        )
                        )}
                      </td>
                      <td className="border-y border-primaryColor/40">
                        <button 
                          className="p-2 mr-4" 
                          title={user.is_restricted ? "Mở khóa tài khoản" : "Tạm cấm tài khoản"}
                          onClick={() => handleRestrict(user.info._id, user.is_restricted)}
                        >
                          {user.is_restricted ? (<TbLockOpenOff className="text-xl"/>) : (<MdBlock className="text-xl"/>)}
                        </button>
                        <button 
                          className="p-2" 
                          title="Xóa vĩnh viễn"
                          onClick={() => handleDelete(user.info._id)}
                        >
                          <MdDelete className="text-xl"/>
                        </button>
                      </td>
                    </tr>
                  )
                }
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users