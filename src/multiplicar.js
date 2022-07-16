export default function multiplicar(num1, num2) {
  let result;
  if (num1 > 0 && num2 > 0) {
    result = num1 * num2;
  } else if (num1 === 0 || num2 === 0) {
    return "Los numeros deben ser mayores que 0";
  } else {
    return "Numero invalido";
  }

  return result;
}
