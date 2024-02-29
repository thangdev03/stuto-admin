import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdEdit, MdBlock, MdDelete } from "react-icons/md";
import LoadingSpinner from '../components/LoadingSpinner';
import { BsDot } from "react-icons/bs";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);

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
                  <td colSpan={5}>
                    <LoadingSpinner col width={32} height={32} className=""/>
                  </td>
                </tr>
              ) : (
                users.map((user, index) => {
                  return (
                    <tr 
                      key={index} 
                      className={ !user.name.toLowerCase().includes(searchText.toLowerCase()) && "hidden" }
                    >
                      <td className="border-y border-primaryColor/40">
                        <input type="checkbox" id={`checkbox-${index}`} className="h-4 w-4"/>
                      </td>
                      <td className="border-y border-primaryColor/40">{index + 1}</td>
                      <td className="border-y border-primaryColor/40">{user.student_id || (<span className="italic text-orange-600">Chưa cập nhật</span>)}</td>
                      <td className="border-y border-primaryColor/40">{user.name}</td>
                      <td className="border-y border-primaryColor/40">Email</td>
                      <td className="border-y border-primaryColor/40">{user.major || (<span className="italic text-orange-600">Chưa cập nhật</span>)}</td>
                      <td className="border-y border-primaryColor/40">{user.createdAt}</td>
                      <td className="border-y border-primaryColor/40">
                        {user.is_active ? (
                          <span className="flex items-center justify-center"><BsDot className="text-4xl text-green-500"/></span>
                        ) : (
                          <span className="flex items-center justify-center"><BsDot className="text-4xl text-red-500"/></span>
                        )}
                      </td>
                      <td className="border-y border-primaryColor/40 flex gap-4 justify-center">
                        <button className="p-2">
                          <MdEdit 
                            className="text-xl" 
                            title="Chỉnh sửa thông tin"  
                            // onClick={() => {
                            // setMajorItem(major);
                            // setIsEditing(true);
                            // }}
                          />
                        </button>
                        <button 
                          className="p-2" 
                          title="Tạm cấm tài khoản"
                          // onClick={() => handleDelete(major._id)}
                        >
                          <MdBlock className="text-xl"/>
                        </button>
                        <button 
                          className="p-2" 
                          title="Xóa vĩnh viễn"
                          // onClick={() => handleDelete(major._id)}
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
          {/* {isEditing && (
            <div className="fixed z-20 left-0 top-0 right-0 bottom-0 bg-gray-500/10 text-center">
              <div className="mx-auto my-10 w-fit min-h-40 py-4 px-6 bg-white rounded-lg">
                <h1 className="font-semibold text-xl">Sửa thông tin chuyên ngành</h1>
                <div className="mt-4 flex justify-center gap-1">
                  <span>Tên chuyên ngành:</span>
                  <input 
                    type="text" 
                    value={majorItem.name} 
                    onChange={(e) => setMajorItem({ _id: majorItem._id, name: e.target.value })}
                    className="bg-primaryColor/20 px-2 rounded-md"
                  />
                </div>
                <div className="mt-5 float-right">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="bg-red-500 px-4 py-2 font-medium text-white rounded-md mr-2 hover:bg-red-400"
                  >
                    Hủy
                  </button>
                  <button 
                    onClick={handleEdit}
                    className="bg-primaryColor px-4 py-2 font-medium text-white rounded-md hover:bg-primaryColor/80"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Users