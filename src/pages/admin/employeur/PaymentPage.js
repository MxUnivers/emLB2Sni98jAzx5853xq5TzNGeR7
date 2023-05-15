import React from  "react";
import { TextField, Button } from '@mui/material';


function PaymentPage() {
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
    };
  
    const handlePaymentSubmit = (event) => {
      event.preventDefault();
      // Logique de soumission du paiement
    };
  
    return (
      <form onSubmit={handlePaymentSubmit}>
        <TextField label="Montant" value={amount} onChange={handleAmountChange} />
        <TextField label="Numéro de carte" value={cardNumber} onChange={handleCardNumberChange} />
        {/* Autres champs de saisie et éléments */}
        <Button type="submit" variant="contained" color="primary">Payer</Button>
      </form>
    );
  }
  
export  default PaymentPage ;