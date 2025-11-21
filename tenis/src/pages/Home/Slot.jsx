import CardSlot from "./CardSlot";
const Slot = ({ date, court, time, bookings }) => {
    const validatorDate = (dateA, dateB, blocks) => {
        const dA = new Date(dateA);
        const dB = new Date(dateB);
        let dC = new Date(dateB);
        dC = new Date(dC.setMinutes(dC.getMinutes() + 30 * blocks));
        return (dA >= dB && dA < dC);
    }
    const validatorSlot = (booking, time, id) => {
        return booking.court_id == id && validatorDate(time, booking.booking_datetime, booking.duration_blocks);
    }
    const b = bookings.find(b => validatorSlot(b, date + " " + time, court.id));
    return (
        <td>
            {b != undefined ? <CardSlot id={b.booking_id} /> : "Libre"}
        </td>
    );
}
export default Slot;