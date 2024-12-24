import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import CardUser from "./CardUser";
function ListUser (){
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=> console.log(err))
    }, [])

    return(
        <div className="carts">
            {
                loading ?  <Spinner animation="border" variant="danger" /> :  users.map((el,i,t)=> <CardUser key={i} el={el}/>)
            }
        </div>
    )
}
export default ListUser