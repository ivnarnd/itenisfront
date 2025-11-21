const CourtItem = ({court})=>{
    return(
        <li>
            <h3>{court.name}</h3>
            <p>{court.description}</p>
        </li>
    );
}
export default CourtItem;