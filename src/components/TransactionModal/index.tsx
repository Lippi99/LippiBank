import closeModal from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioTypeBox } from './styles';
import { FormEvent, useState } from 'react';
import { useTransaction } from '../../hooks/useTransaction';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: NewTransactionProps){

  const { createTransaction } = useTransaction();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');


  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type
    });

    console.log(type)

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    

    toast.success("Dados registrados", {
      position :"top-right",
      autoClose: 3000,
      hideProgressBar:false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false
    });
  };

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
 
    >
      <button
        onClick={onRequestClose}      
        className="react-modal-close"
      >
        <img src={closeModal} alt="close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>        

        <input 
          type="text" 
          placeholder="Nome" 
          onChange={e => setTitle(e.target.value)} 
          value={title}
          required={true}
        />

        <input 
          type="number" 
          placeholder="Preço"
          onChange={e => setAmount(Number(e.target.value))}
          value={amount}  
          required={true}
        />

        <TransactionTypeContainer>
          <RadioTypeBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
            aria-required
          >
            <img src={income} alt="Entrada" />
            <p>Entrada</p>
          </RadioTypeBox>
          
          <RadioTypeBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
            aria-required
          >
            <img src={outcome} alt="Saída" />
            <p>Saída</p>
          </RadioTypeBox>
        </TransactionTypeContainer>

          <input 
            type="text" 
            placeholder="Categoria"
            onChange={e => setCategory(e.target.value) }
            required={true}
          />
          <button type="submit">Cadastrar</button>
          <ToastContainer />
      </Container>
    </Modal>
  ) 
}
