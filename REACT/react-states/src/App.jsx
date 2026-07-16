import './App.css';
import Counter from './Counter';
import LikeButton from './LikeButton';
import LudoBoard from './LudoBoard';
import ToDoList from './ToDoList';
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from "./helper";
import Form from './Form';
import CommentsForm from './CommentsForm';
import Comments from './Comments';
import Counter2 from './Counter2';
import Joker from './Joker';
function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      {/* <LudoBoard/> */}
      {/* <ToDoList/> */}
      {/* <Lottery n = {3}  winCondition={winCondition}/> */}
      {/* < Form /> */}
      {/* <CommentsForm /> */}
      {/* <Comments /> */}
      {/* <Counter2 /> */}
      <Joker />
    </>
  )

}
;
export default App
