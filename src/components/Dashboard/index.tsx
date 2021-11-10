import { Entries } from "../Entries";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Entries />
            <TransactionTable />
        </Container>
    )
}