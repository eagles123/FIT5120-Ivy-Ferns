import React, { useState } from "react";

export default function SlideInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e, value) {
    setValue(value);
  }

  return {
    value,
    onChange: handleChange
  };
}
