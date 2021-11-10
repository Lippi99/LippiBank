import logo from '../../assets/logo.png';

import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenTransactionModal: () => void;
}


export function Header({onOpenTransactionModal}: HeaderProps) {
    return(
        <Container>
            <Content>
                <div>
                    <img src={logo} alt="logo" />
                    <h1>Lippi Bank</h1>
                </div>
                <button type="button" onClick={onOpenTransactionModal}>Nova transação</button>
            </Content>
        </Container>

    )
}