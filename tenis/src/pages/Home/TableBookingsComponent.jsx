import { useEffect, useState } from "react";
import { getBookingsTime } from "../../utils/bookingsManager";
import Slot from "./Slot";
const TableBookingComponent = ({ courts, bookings, date }) => {
    const [bookingsTime, setBookingsTime] = useState([]);
    useEffect(() => {
        setBookingsTime(getBookingsTime());
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Hora</th>
                    {courts.map(court => <th key={court.id}>{court.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    bookingsTime.map((bt) => {
                        return (
                            <tr key={bt}>
                                <td>{bt.slice(0, 5)}</td>
                                {courts.map(court => <Slot key={court.id} date={date} court={court} time={bt} bookings={bookings}></Slot>)}
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};
export default TableBookingComponent;