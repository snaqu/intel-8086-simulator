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

  setters[pickedFirstParam](getters[secondParam.toLowerCase()]);
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

export { moveParameters, addSubParameters };
