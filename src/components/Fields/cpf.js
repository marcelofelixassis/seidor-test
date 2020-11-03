import React from 'react';
import InputMask from 'react-input-mask';
 
const Cpf = (props) => (
  <InputMask mask="999.999.999-99" disabled={props.disabled} name={props.name} value={props.value} maskChar={false} onChange={props.onChange} />
);

export default Cpf;