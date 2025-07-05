export class AreaConverter {
  constructor() {
    this.conversions = {
      "m²": 1,
      "km²": 1000000,
      "cm²": 0.0001,
      "mm²": 0.000001,
      "ft²": 0.092903,
      "in²": 0.00064516,
      "yd²": 0.836127,
      acre: 4046.86,
      hectare: 10000,
    };
  }

  getUnits() {
    return [
      { key: "m²", name: "Meter persegi" },
      { key: "km²", name: "Kilometer persegi" },
      { key: "cm²", name: "Sentimeter persegi" },
      { key: "mm²", name: "Milimeter persegi" },
      { key: "ft²", name: "Kaki persegi" },
      { key: "in²", name: "Inci persegi" },
      { key: "yd²", name: "Yard persegi" },
      { key: "acre", name: "Acre" },
      { key: "hectare", name: "Hektar" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}