const mappedOptions = {
  AX: 'setAx',
  BX: 'setBx',
  CX: 'setCx',
  DX: 'setDx',
};

const parseToHex = (number) => parseInt(number, 2);
const parseToBinary = (number) => number.toString(2);

const moveParameters = (form, setters, getters) => {
  const firstParam = form.get('param1');
  const secondParam = form.get('param2');

  const pickedFirstParam = mappedOptions[firstParam];

  setters[pickedFirstParam](getters[secondParam.toLowerCase()]);
};

const addSubParameters = (form, setters, getters, isSubtraction = false) => {
  const firstParam = form.get('param1');
  const secondParam = form.get('param2');

  const setterName = mappedOptions[firstParam];
  const pickedSetter = setters[setterName];

  const registerFirstParamValue = parseToHex(getters[firstParam.toLowerCase()]);
  const registerSecondParamValue = parseToHex(getters[secondParam.toLowerCase()]);

  const operation = !isSubtraction
    ? parseToBinary(registerFirstParamValue + registerSecondParamValue)
    : parseToBinary(registerFirstParamValue - registerSecondParamValue);

  pickedSetter(String(operation));
};

export { moveParameters, addSubParameters };
