import { useContext, useRef, useState, } from "react";
import { UserContext } from "../../../context/user/userContext";

const NormalSearch = ({users}) => {
    const [inputText,setInputText] = useState('')
    const {searchText, setSearchText}=useContext(UserContext)

    const handleClick = () => {
        setSearchText(inputText)
    }
    return (
        <div className="w-full flex flex-row justify-between">
            <div className='relative w-4/5 flex items-center group'>
                <input
                    value={inputText}
                    onChange={(e) => {setInputText(e.target.value)}}
                    type='text'
                    placeholder='Tìm kiếm...'
                    className="w-full h-[50px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]"
                />
                <i className="absolute right-2 fa-solid fa-magnifying-glass"></i>
            </div>  
            <div className="w-1/6 h-[50px]">
                <button className="w-full h-full flex justify-center items-center border border-[#3e3e3e] rounded-lg hover:bg-[#679cf8] hover:border-[#679cf8] group">
                    <p className="font-bold text-lg group-hover:text-white" 
                        onClick={handleClick} 
                    >Tìm kiếm</p>
                </button>
            </div>
        </div>
    );
}

export default NormalSearch;