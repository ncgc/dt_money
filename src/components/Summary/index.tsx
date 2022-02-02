import { Container } from "./styles";
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p> Entradas </p>
          <img src={outcomeImg} alt="Entradas"></img>
        </header>
        <strong>R$ 1000.00</strong>
      </div>
    </Container>
  )
}