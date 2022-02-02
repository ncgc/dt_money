import { Container } from "./styles";

export function TransactionTable(){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> Desenvolvimento de website</td>
            <td className= "deposit"> R$ 100.00 </td>
            <td> Desenvolvimento </td>
            <td> 22/02/22 </td>
          </tr>
          <tr>
            <td> Aluguel</td>
            <td className= "withdraw"> - R$ 100.00 </td>
            <td> Desenvolvimento </td>
            <td> 22/02/22 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}