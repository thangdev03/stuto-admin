import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import LoadingSpinner from '../components/LoadingSpinner';

const Majors = () => {
  const [searchText, setSearchText] = useState("");
  const [majorItem, setMajorItem] = useState({});
  const [newMajorName, setNewMajorName] = useState("")
  const [majors, setMajors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async () => {
    const response = await fetch("http://localhost:5555/major", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newMajorName
      })
    });
    const data = await response.json();
    if (data) {
      setIsSuccess(true);
      setIsCreating(false);
    }
    // return alert(data);
  }

  const handleEdit = async () => {
    const response = await fetch(`http://localhost:5555/major/${majorItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: majorItem.name
      })
    });
    const data = await response.json();
    if (data) {
      setIsSuccess(true);
      setIsEditing(false);
    }
    // return alert(data.message);
  }

  const handleDelete = async (id) => {
    const result = window.confirm("Bạn có chắc muốn xóa chuyên ngành này không?");
    if (result) {
      const response = await fetch(`http://localhost:5555/major/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data) {
        setIsSuccess(true);
      }
      // return alert(data.message)
    }
  }
  
  useEffect(() => {
    setIsSuccess(false)
    setIsLoading(true)
    fetch("http://localhost:5555/major")
      .then((response) => response.json())
      .then((majorsData) => setMajors(majorsData.data))
      .then(() => setIsLoading(false))
  }, [isSuccess])
    
    return (
    <div className="mt-16 py-10 px-10">
      <div className="flex gap-2">
        <button 
          onClick={(e) => setIsCreating(true)}
          className="px-4 py-2 bg-primaryColor text-white font-semibold flex items-center gap-1 rounded-lg hover:bg-primaryColor/80"
        >
          <IoIosAddCircleOutline className="text-lg"/>
          Thêm
        </button>
        {isCreating && (
            <div className="fixed z-20 left-0 top-0 right-0 bottom-0 bg-gray-500/10 text-center">
              <div className="mx-auto my-10 w-fit min-h-40 py-4 px-6 bg-white rounded-lg">
                <h1 className="font-semibold text-xl">Thêm mới chuyên ngành</h1>
                <div className="mt-4 flex justify-center gap-1">
                  <span>Tên chuyên ngành:</span>
                  <input 
                    type="text" 
                    value={newMajorName} 
                    onChange={(e) => setNewMajorName(e.target.value)}
                    className="bg-primaryColor/20 px-2 rounded-md"
                  />
                </div>
                <div className="mt-5 float-right">
                  <button 
                    onClick={() => setIsCreating(false)}
                    className="bg-red-500 px-4 py-2 font-medium text-white rounded-md mr-2 hover:bg-red-400"
                  >
                    Hủy
                  </button>
                  <button 
                    onClick={handleCreate}
                    className="bg-primaryColor px-4 py-2 font-medium text-white rounded-md hover:bg-primaryColor/80"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}
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
                <th className="py-2">TÊN CHUYÊN NGÀNH</th>
                <th className="py-2">SỐ NGƯỜI THUỘC CHUYÊN NGÀNH</th>
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
                majors
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((major, index) => (
                  <tr 
                    key={index} 
                    className={ !major.name.toLowerCase().includes(searchText.toLowerCase()) && "hidden" }
                  >
                    <td className="border-y border-primaryColor/40">
                      <input type="checkbox" id={`checkbox-${index}`} className="h-4 w-4"/>
                    </td>
                    <td className="border-y border-primaryColor/40">{index + 1}</td>
                    <td className="border-y border-primaryColor/40">{major.name}</td>
                    <td className="border-y border-primaryColor/40">35</td>
                    <td className="border-y border-primaryColor/40">
                      <button className="p-2 mr-4">
                        <MdEdit className="text-xl" onClick={() => {
                          setMajorItem(major);
                          setIsEditing(true);
                        }}/>
                      </button>
                      <button className="p-2" onClick={() => handleDelete(major._id)}>
                        <MdDelete className="text-xl"/>
                      </button>
                    </td>
                  </tr>
                ))
                )}
            </tbody>
          </table>
          {isEditing && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Majors