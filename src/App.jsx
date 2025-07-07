import './App.css'
import { sum } from './helper';
import Lottery from './Lottery'
import Ticket from './Ticket';
import TicketNum from './TicketNum';

function App() {

  // ---- New Condition  ------ 
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // }

  //----- New Consition -------
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
      {/* Only Lottery function call */}
      {/* <Lottery /> */}

      {/* Ticket function call  */}
      {/* <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[0, 1, 2, 3, 4]} /> */}

      {/* Lottery function call with n & winningSum agrument(props) */}
      <Lottery n={3} winCondition={winCondition} />
    </>

  )
}
export default App;
