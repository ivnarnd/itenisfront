import { useEffect, useState } from "react"
import FooterComponent from "../../components/FooterComponent.jsx"
import HeaderComponent from "../../components/HeaderComponent.jsx"
import { getDate, getSoon, transformDate } from "../../utils/DateManager.js";

const HomePage = () => {
    const [date, setDate] = useState(getDate());
    const inputHandler = (e) => {
        const dateAux = getDate(e.target.value);
        setDate(dateAux);
    }
    const clickHandler = () => {
        const dateAux = getSoon(date);
        setDate(dateAux);
    };
    useEffect(() => {
        console.log("Fecha Actualizada = " + date);
    }, [date]);
    return (
        <main>
            <HeaderComponent />
            <section>
                <p>Reservas del dia - {transformDate(date)} </p>
                <input type="date" name="date" id="date" onInput={inputHandler} value={date} />
                <button onClick={clickHandler}>🔜</button>
            </section>
            <FooterComponent />
        </main>
    )
}
export default HomePage;