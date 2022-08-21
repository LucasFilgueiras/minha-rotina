import { useState } from 'react';
import styled from 'styled-components';

export default function DateInput() {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  const Input = styled.input`
    border: none;

  `;

  const onDateChange = (event) => {
    
  }

  return (
    <Input type="textfield" onChange={onDateChange} value={date}/>
  )
} 