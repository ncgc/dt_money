import { Container } from "./styles";
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const data = useContext(TransactionsContext);
  
  return (
    <Container>
      <div>
        <header>
          <p> Entradas </p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong>R$ 1000.00</strong>
      </div>
      
    </Container>
  )
}