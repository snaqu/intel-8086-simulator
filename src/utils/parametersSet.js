const mappedOptions = {
  AX: 'setAx',
  BX: 'setBx',
  CX: 'setCx',
  DX: 'setDx',
};
  
const moveParameters = (form, setters, getters) => {
  const firstParam = form.get('param1');
  const secondParam = form.get('param2');

  const pickedFirstParam = mappedOptions[firstParam];
  const pickedSecondParam = mappedOptions[secondParam];
  
  setters[pickedFirstParam](getters[secondParam.toLowerCase()]);
  setters[pickedSecondParam]('');
};

const addSubParameters = (form, setters, getters, isSubtraction = false) => {
  const firstParam = form.get('param1');
  const secondParam = form.get('param2');

  const setterName = mappedOptions[firstParam];
  const pickedSetter = setters[setterName];
  
  const registerFirstParamValue = Number(getters[firstParam.toLowerCase()]);
  const registerSecondParamValue = Number(getters[secondParam.toLowerCase()]); 

  const operation = !isSubtraction 
    ? registerFirstParamValue + registerSecondParamValue
    : registerFirstParamValue - registerSecondParamValue;

  pickedSetter(operation);
};

// const moveParameters = (form, setters, getters) => {
//   const mappedOptions = {
//     AX: 'setAx',
//     BX: 'setBx',
//     CX: 'setCx',
//     DX: 'setDx',
//   };
  
//   const firstParam = form.get('param1');
//   const secondParam = form.get('param2');
  
//   // wartość z pola 1 jest przepisywana do pola 2
//   // wartość z pola 1 wtedy znika

//   const pickedFirstParam = mappedOptions[firstParam];
//   const pickedSecondParam = mappedOptions[secondParam];
  
//   setters[pickedFirstParam](getters[secondParam.toLowerCase()]);
//   setters[pickedSecondParam](getters[firstParam.toLowerCase()]);
// };

export { moveParameters, addSubParameters };
