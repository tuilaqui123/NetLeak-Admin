import { useContext } from "react";
import ImageBox from "./ImageBox";
import { UserContext } from "../../../context/user/userContext";


const Table = ({data}) => {
   const {searchUserText} = useContext(UserContext);

    return (
        <div className='w-full h-full grid grid-cols-4 gap-5'>
            {data ? (
                data.map((ele, index) =>{
                    if(ele.name.toLowerCase().includes(searchUserText.toLowerCase().trim()) || searchUserText == '')
                    return(
                         <ImageBox key={index} ele= {ele}/>
                    );
                 
                })
            ) : ""}
            {/* <ImageBox /> */}
        </div>
    );
}

export default Table;
