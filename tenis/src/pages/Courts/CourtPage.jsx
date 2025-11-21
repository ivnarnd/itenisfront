import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import { useEffect, useState } from "react";
import api from "../../utils/axios";
import CourtList from "./CourtList";
const CourtPage = ()=>{
    const [courts,setCourts] = useState([]);
    useEffect(()=>{
        api.get('/courts').then(res=>{
            setCourts(res.data)});
    },[])
    return(
        <main>
            <HeaderComponent/>
            <section>
                <h2>Canchas</h2>
                <CourtList courts={courts}/>
            </section>
            <FooterComponent/>
        </main>
    );
}
export default CourtPage;