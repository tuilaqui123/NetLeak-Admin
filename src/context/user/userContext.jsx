
import { createContext, useState , useEffect} from "react";
import axios from "axios";


export const UserContext = createContext([])

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState("")
  const fetch = () => {
    axios.get("http://localhost:8081/v1/api/admin/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  useEffect(() => {
    fetch()
}, [])



  return (
    <UserContext.Provider value={{ users , setUsers, searchText, setSearchText }}>
      {children}
    </UserContext.Provider>
  );
};
