class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual
    this.deducciones = deducciones
  }
  
  get montoBrutoAnual() {
    return this.montoBrutoAnual
  }
  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual.push(nuevoMontoBrutoAnual)
  }
  calcularImpuestos() {
    return (this.montoBrutoAnual - this.deducciones) * 0.21
  }
  
  get deducciones() {
    return this.deducciones
  }
  set deducciones(nuevaDeduccion) {
    this.deducciones.push(nuevaDeduccion)
  }
}
let Impuestos = new Impuestos()