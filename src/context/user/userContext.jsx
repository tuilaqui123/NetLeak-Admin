
import { createContext, useState , useEffect} from "react";
import axios from "axios";


export const UserContext = createContext([])

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [casts, setCasts] = useState([])
  const [searchUserText, setSearchUserText] = useState("")
  const fetchUser = () => {
    axios.get("http://localhost:8081/v1/api/admin/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  const fetchCast = () => {
    axios.get("http://localhost:8081/v1/api/admin/casts")
    .then((res)=>{
        console.log(res.data)
        setCasts(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  useEffect(() => {
    fetchUser()
    fetchCast()
  }, [])

  return (
    <UserContext.Provider value={{ users , setUsers, casts, setCasts, searchUserText, setSearchUserText, fetchCast }}>
      {children}
    </UserContext.Provider>
  );
};
