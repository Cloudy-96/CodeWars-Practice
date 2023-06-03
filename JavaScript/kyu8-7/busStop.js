const busStops = [
  [10, 0],
  [3, 5],
  [5, 8],
];

function numPassangers(busStops) {
  let count = 0;
  for (i = 0; i < busStops.length; i++) {
    let stop = busStops[i];
    count += stop[0] - stop[1];
  }
  console.log(count);
  return count;
}

// numPassangers(busStops)
