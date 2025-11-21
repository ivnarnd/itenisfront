import { useEffect, useState } from "react"
import FooterComponent from "../../components/FooterComponent.jsx"
import HeaderComponent from "../../components/HeaderComponent.jsx"
import { getDate, getSoon, transformDate } from "../../utils/DateManager.js";
import TableBookingComponent from "./TableBookingsComponent.jsx";
import api from "../../utils/axios.js";

const HomePage = () => {
    const [date, setDate] = useState(getDate());
    const[courts,setCourts] = useState([]);
    const[bookings,setBookings] = useState([]);
    const inputHandler = (e) => {
        const dateAux = getDate(e.target.value);
        setDate(dateAux);
    }
    const clickHandler = () => {
        const dateAux = getSoon(date);
        setDate(dateAux);
    };
    useEffect(() => {
        api.get(`/booking?date=${date}`).then(res => setBookings(res.data))
    }, [date]);

    useEffect(()=>{
        api.get('/courts').then(res=>{
            setCourts(res.data);
        });
    },[]);
    return (
        <main>
            <HeaderComponent />
            <section>
                <p>Reservas del dia - {transformDate(date)} </p>
                <input type="date" name="date" id="date" onInput={inputHandler} value={date} />
                <button onClick={clickHandler}>🔜</button>
                <TableBookingComponent courts={courts} bookings={bookings} date={date}/>
            </section>
            <FooterComponent />
        </main>
    )
}
export default HomePage;