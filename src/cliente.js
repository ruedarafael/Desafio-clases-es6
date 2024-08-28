class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  get nombre() {
    return this.nombre;
  }

  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  get impuesto() {
    return this.impuesto;
  }

  CalcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}

let cliente = new Cliente();
console.log(cliente1);
