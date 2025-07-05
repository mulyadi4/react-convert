export class AngleConverter {
  constructor() {
    this.conversions = {
      deg: 1,
      rad: 57.2958,
      grad: 0.9,
      turn: 360,
      arcmin: 1 / 60,
      arcsec: 1 / 3600,
    };
  }

  getUnits() {
    return [
      { key: "deg", name: "Derajat" },
      { key: "rad", name: "Radian" },
      { key: "grad", name: "Gradian" },
      { key: "turn", name: "Putaran" },
      { key: "arcmin", name: "Menit busur" },
      { key: "arcsec", name: "Detik busur" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}