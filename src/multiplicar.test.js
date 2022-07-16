import multiplicar from "./multiplicar";

describe("Probando la funcion de multiplicar", () => {
  //Numeros sean positivos
  //Numeros sean mayores que cero
  //Que se realice la multiplicacion

  it("Multplicacion correcta", () => {
    const resultado = multiplicar(3, 1);
    expect(resultado).toEqual(3);
  });
  it("Los numeros son positivos", () => {
    const resultado = multiplicar(3, 1);
    expect(resultado).toEqual(3);
  });
  it("Los numeros son positivos", () => {
    const resultado = multiplicar(-3, 1);
    expect(resultado).toEqual("Numero invalido");
  });
  it("Los numeros deben ser mayores a cero", () => {
    const resultado = multiplicar(0, 1);
    expect(resultado).toEqual("Los numeros deben ser mayores que 0");
  });
});
