export class VolumeConverter {
  constructor() {
    this.conversions = {
      "m³": 1,
      "l": 0.001,
      "ml": 0.000001,
      "gal": 0.00378541,
      "qt": 0.000946353,
      "pt": 0.000473176,
      "cup": 0.000236588,
      "fl oz": 0.0000295735,
    };
  }

  getUnits() {
    return [
      { key: "m³", name: "Meter kubik" },
      { key: "l", name: "Liter" },
      { key: "ml", name: "Mililiter" },
      { key: "gal", name: "Galon" },
      { key: "qt", name: "Quart" },
      { key: "pt", name: "Pint" },
      { key: "cup", name: "Cup" },
      { key: "fl oz", name: "Fluid ounce" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}