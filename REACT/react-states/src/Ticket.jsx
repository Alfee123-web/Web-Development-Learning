import TicketNum from "./TicketNum"
import "./Ticket.css";

export default function Ticket({ticket}){
    return(

     <div className="Ticket">
        <p>TICKET</p>
        
       {ticket.map((num , idx) => (
        <TicketNum num={num} key={idx} />
       ))}
    </div>
    )
}