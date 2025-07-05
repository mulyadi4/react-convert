export class TemperatureConverter {
  getUnits() {
    return [
      { key: "C", name: "Celsius" },
      { key: "F", name: "Fahrenheit" },
      { key: "K", name: "Kelvin" },
      { key: "R", name: "Rankine" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    // Convert to Celsius first
    let celsius;
    switch (fromUnit) {
      case "C":
        celsius = value;
        break;
      case "F":
        celsius = (value - 32) * 5/9;
        break;
      case "K":
        celsius = value - 273.15;
        break;
      case "R":
        celsius = (value - 491.67) * 5/9;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to target unit
    switch (toUnit) {
      case "C":
        return celsius;
      case "F":
        return celsius * 9/5 + 32;
      case "K":
        return celsius + 273.15;
      case "R":
        return celsius * 9/5 + 491.67;
      default:
        return celsius;
    }
  }
}