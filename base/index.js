const calc = () => 4 * 5;

const printCalc = callback => console.log(callback());

printCalc(calc);
