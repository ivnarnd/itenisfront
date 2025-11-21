import CourtItem from "./CourtItem";

const CourtList = ({courts})=>{
    return(
        <ul>
            {courts.map(court=><CourtItem key={court.id} court={court}/>)}
        </ul>
    )
};
export default CourtList;