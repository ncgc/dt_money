import { Container } from "./styles";
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p> Entradas </p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong></strong>
      </div>
      <div>
        <header>
          <p> Saídas </p>
          <img src={outcomeImg} alt="Saídas"></img>
        </header>
        <strong></strong>
      </div>
      <div>
        <header>
          <p> Total </p>
          <img src={totalImg} alt="Total"></img>
        </header>
        <strong></strong>
      </div>
    </Container>
  )
}