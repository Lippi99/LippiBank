import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransaction';

import { Container } from "./styles";

export function Entries(){

    const { transactions } = useTransaction();

    const entries = transactions.reduce((acc, transaction) => {
        if (transaction.type === "deposit") {
            acc.deposits+= transaction.amount;
            acc.total+= transaction.amount;
        }

        else {
            acc.withdraws-= transaction.amount;
            acc.total-= transaction.amount;
        }
        return acc;
    },
    {
        deposits: 0,
        withdraws: 0,
        total: 0
    })



    return (
        <Container>
            <div>
                <header>
                    <span>Entradas</span>
                    <img src={income} alt="income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"}).format(entries.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <span>Saídas</span>
                    <img src={outcome} alt="outcome" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"}).format(entries.withdraws)}
                </strong>
            </div>

            <div className="highlight-total">
                <header>
                    <span>Total</span>
                    <img src={total} alt="income" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"}).format(entries.total)}
                </strong>
            </div>
        </Container>
    )
}