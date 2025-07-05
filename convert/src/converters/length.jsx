export class LengthConverter {
  constructor() {
    this.conversions = {
      m: 1,
      km: 1000,
      cm: 0.01,
      mm: 0.001,
      ft: 0.3048,
      in: 0.0254,
      yd: 0.9144,
      mi: 1609.34,
    };
  }

  getUnits() {
    return [
      { key: "m", name: "Meter" },
      { key: "km", name: "Kilometer" },
      { key: "cm", name: "Sentimeter" },
      { key: "mm", name: "Milimeter" },
      { key: "ft", name: "Kaki" },
      { key: "in", name: "Inci" },
      { key: "yd", name: "Yard" },
      { key: "mi", name: "Mil" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}