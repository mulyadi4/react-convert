export class TimeConverter {
  constructor() {
    this.conversions = {
      s: 1,
      min: 60,
      h: 3600,
      day: 86400,
      week: 604800,
      month: 2629746,
      year: 31556952,
    };
  }

  getUnits() {
    return [
      { key: "s", name: "Detik" },
      { key: "min", name: "Menit" },
      { key: "h", name: "Jam" },
      { key: "day", name: "Hari" },
      { key: "week", name: "Minggu" },
      { key: "month", name: "Bulan" },
      { key: "year", name: "Tahun" },
    ];
  }

  convert(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    const baseValue = value * this.conversions[fromUnit];
    return baseValue / this.conversions[toUnit];
  }
}