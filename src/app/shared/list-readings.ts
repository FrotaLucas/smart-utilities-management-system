import { Reading } from "../interfaces/reading"

const listOfreading: Reading[] = [
  {
    uuid: 'uuid',
    kindOfMeter: "Energy",
    comment: "Routine monthly reading",
    meterId: 101,
    meterCount: 15230,
    dateOfReading: "01-05-2025"
  },
  {
    uuid: 'uuid',
    kindOfMeter: "Water",
    comment: "Slightly higher than usual",
    meterId: 202,
    meterCount: 847,
    dateOfReading: "01-05-2025"
  },
  {
    uuid: 'uuid',
    kindOfMeter: "Energy",
    comment: "After maintenance",
    meterId: 101,
    meterCount: 15400,
    dateOfReading: "01-06-2024"
  },
  {
    uuid: 'uuid',
    kindOfMeter: "Water",
    comment: "Normal usage",
    meterId: 202,
    meterCount: 900,
    dateOfReading: "01-06-2024"
  },
  {
    uuid: 'uuid',
    kindOfMeter: "Energy",
    comment: "New tenant started",
    meterId: 103,
    meterCount: 500,
    dateOfReading: "10-05-2025"
  }
];

export {listOfreading};

