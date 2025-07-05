export class AccelerationConverter {
  constructor() {
    this.conversions = {
      "m/s²": 1,
      "ft/s²": 0.3048,
      g: 9.80665,
      "km/h/s": 0.277778,
      "mph/s": 0.44704,
    };
  }

  getUnits() {
    return [
      { key: "m/s²", name: "Meter per detik kuadrat" },
      { key: "ft/s²", name: "Kaki per detik kuadrat" },
      { key: "g", name: "Gravitasi standar (g)" },
      { key: "km/h/s", name: "Kilometer per jam per detik" },
      { key: "mph/s", name: "Mil per jam per detik" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}