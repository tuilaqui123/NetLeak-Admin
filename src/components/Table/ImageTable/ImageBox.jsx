import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/user/userContext';


const ImageBox = ({ele, type}) => {

    const [showConfirmation, setShowConfirmation]= useState(false);
    const {fetchCast, fetchStudio} = useContext(UserContext)
    const deleteCast= ()=>{
    axios.delete(`http://localhost:8081/v1/api/admin/casts?id=${ele._id}&imageUrl=${ele.avatar}`)
   .then((res) => {
    console.log(res.data);
    fetchCast();
   })
   .catch((err) => console.log(err));
   
}
const deleteStudio= ()=>{
    axios.delete(`http://localhost:8081/v1/api/admin/studios?id=${ele._id}&imageUrl=${ele.avatar}`)
   .then((res) => {
    console.log(res.data);
   
    fetchStudio();
   })
   .catch((err) => console.log(err));
   
}

    const handleDelete= ()=>{
        if(type == 'cast')
            {deleteCast()}
            else{deleteStudio()}
        alert("Đã xóa thành công");
        setShowConfirmation(false)
    }    

    return (
        <div className="w-full flex flex-col  ">
        <div className="flex-grow flex items-center justify-center rounded-md  bg-[#7883a1]">
            <img
                src={ele.avatar}
                className="w-full h-auto"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
        </div>
        <div className="flex flex-row items-center  ">
        <div className='w-4/5 flex items-center justify-center'>
               <p className="py-5 text-white font-bold">{ele.name}</p>
            </div>
        
        <div className='w-1/5 flex items-center justify-center'>
                <div className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center rounded-full hover:bg-[#0A3379] duration-150 east-out group" onClick={()=>setShowConfirmation(true)}>
                    <i className="fa-solid fa-trash text-2xl  text-[#0A3379] group-hover:text-white duration-150 east-out"></i>
                </div>
            </div>
            </div>
            {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <p>Bạn có chắc chắn muốn xóa không?</p>
            {/* <p>{ele._id}, {ele.name} </p> */}
            <div className="flex justify-end mt-4 p-5 rounded-md">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    );
}

export default ImageBox;