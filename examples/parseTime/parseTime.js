function parseTime (time) {
  const parsed = time.split(/:/)

  return parsed.length === 2
    ? { hours: parsed[0], minutes: parsed[1] }
    : { hours: 0, minutes: 0 }
}

function toHours ({ hours, minutes }) {
  return hours + (minutes / 60)
}

function duration (a, b) {
  const durA = toHours(parseTime(a))
  const durB = toHours(parseTime(b))

  return Math.abs(durA - durB)
}

const t = require('assert')

t.strictEqual(duration('10:00', '12:00'), 2)
t.strictEqual(duration('11:30', '14:00'), 2.5)
t.strictEqual(duration('8:00', '7:00'), 1)
t.strictEqual(duration('23:45', '20:00'), 3.75)
