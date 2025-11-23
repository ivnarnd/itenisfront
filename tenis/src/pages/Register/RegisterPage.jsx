import { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const RegisterPage = ()=>{
    const [person,setPerson] = useState({});
    useEffect(()=>{
        setPerson({email:'',name:'',lastname:'',password:''});
    },[])
    return(
        <main>
            <HeaderComponent/>
            <section>
                <h2>Registro</h2>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={person.email}/>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={person.name}/>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id="lastname" name="lastname" value={person.lastname}/>
                <label htmlFor="password">Clave</label>
                <input type="password" id="password" name="password" value={person.password}/>
                <input type="submit" value={"Registrar"} />
            </form>
            </section>
            <FooterComponent/>
        </main>
    );
}
export default RegisterPage;