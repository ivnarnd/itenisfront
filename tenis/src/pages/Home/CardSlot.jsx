import { useEffect,useState } from "react";
import api from "../../utils/axios";

const CardSlot = ({id})=>{
    const [participants,setParticipants] = useState([]);
    useEffect(()=>{
        api.get(`/booking_participant/${id}`).then(res=>setParticipants(res.data));
    },[id]);
    return(
        <div>
            {
                participants.map(p=>p.first_name).join(' / ')
            }
        </div>
    );
}
export default CardSlot;