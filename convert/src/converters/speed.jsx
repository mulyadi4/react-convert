export class SpeedConverter {
  constructor() {
    this.conversions = {
      "m/s": 1,
      "km/h": 0.277778,
      "mph": 0.44704,
      "ft/s": 0.3048,
      knot: 0.514444,
    };
  }

  getUnits() {
    return [
      { key: "m/s", name: "Meter per detik" },
      { key: "km/h", name: "Kilometer per jam" },
      { key: "mph", name: "Mil per jam" },
      { key: "ft/s", name: "Kaki per detik" },
      { key: "knot", name: "Knot" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}