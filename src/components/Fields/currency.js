import React from "react";
import NumberFormat from 'react-number-format'

const Currency = (props) => {
  const handleChange = (values) => {
    props.onChange(values.floatValue, props.name)
  };

  return (
    <NumberFormat
    inputMode={<input name={props.name}></input>}
      decimalScale={2}
      decimalSeparator=","
      fixedDecimalScale
      onValueChange={handleChange}
      placeholder="R$ 0,00"
      prefix="R$ "
      thousandSeparator="."
      value={props.value}
    />
  );
}

export default Currency;
