(a, b) => {
  // determine default function to use first in case of error
  const [minOutput, maxOutput] = ((a, b) => {
    const defaultA = 0.25;
    const defaultB = 0.35;
    if (a === undefined && b === undefined) {
      a = defaultA;
      b = defaultB;
    } else if (a === undefined) a = (b / defaultB) * defaultA;
    else if (b === undefined) b = (a / defaultA) * defaultB;
    if (a >= b) return [b, a];
    return [a, b];
  })(a, b);
  const originalFunction = typeof (
    astreplace_value_originalFunction !== "undefined"
  )
    ? astreplace_value_originalFunction
    : (min, max) => randBetween(min, max);
  const defaultFunction = () => originalFunction(minOutput, maxOutput);
  // anything else can error out if thay want
  try {
    // gather info stage
    const randBetween = (min, max) => Math.random() * (max - min) + min;
    const riggedIndexes = typeof (_astreplace_value_riggedIndexes !== "undefined")
      ? _astreplace_value_riggedIndexes
      : [];
    const riggedValues = typeof (_astreplace_value_riggedValues !== "undefined")
      ? _astreplace_value_riggedValues
      : [];
    if (riggedIndexes < 0 || riggedValues.length < 1) return defaultFunction();
    const stopThreshold = typeof (
      _astreplace_value_stopThreshold !== "undefined"
    )
      ? _astreplace_value_stopThreshold
      : 0.002;
    if (typeof (_astreplace_identifier_accelerationFactor !== "undefined"))
      return defaultFunction();
    const accelerationFactor = parseFloat(
      _astreplace_identifier_accelerationFactor
    );
    if (typeof _astreplace_identifier_sectorAngles === "undefined")
      return defaultFunction();
    const sectorAngles = _astreplace_identifier_sectorAngles;
    if (typeof _astreplace_identifier_wheelSectors === "undefined")
      return defaultFunction();
    const wheelSectors = _astreplace_identifier_wheelSectors;
    if (typeof _astreplace_identifier_currentWheelAngle === "undefined")
      return defaultFunction();
    const currentWheelAngle = _astreplace_identifier_currentWheelAngle;
    // don't use Set, we want the more an index appears the more likely it is to be chosen
    const riggedSectorIndexes = [
      ...riggedIndexes.filter(
        (index) => index >= 0 && index < sectorAngles.length
      ),
      ...wheelSectors.reduce(
        (indexes, sectorInfo, index) =>
          Object.values(sectorInfo).some((text) =>
            riggedValues.some((value) => text == value)
          )
            ? indexes.concat(index)
            : indexes,
        []
      ),
    ];
    if (riggedSectorIndexes.length < 1) return defaultFunction();
    // logic stage
    const twoPi = 2 * Math.PI;
    const minDeceleration = stopThreshold,
      maxDeceleration = (() => {
        const higherBound = stopThreshold / accelerationFactor;
        return higherBound - (higherBound - stopThreshold) / 10;
      })();
    function* generateSpinDecelerations() {
      while (true) {
        const riggedSectorIndex =
          riggedSectorIndexes[
            Math.floor(Math.random() * riggedSectorIndexes.length)
          ];
        const [riggedSectorAngleStart, riggedSectorAngleEnd] = (() => {
          const start = sectorAngles
            .slice(0, riggedSectorIndex)
            .reduce((acc, angle) => acc + angle, 0);
          const end = start + sectorAngles[riggedSectorIndex];
          return [start, end];
        })();
        let simulatingWheelAngle = currentWheelAngle;
        const possibleSpinDecelerations = [];
        for (
          let deceleration = randBetween(minDeceleration, maxDeceleration);
          deceleration <= maxOutput;
          deceleration /= accelerationFactor
        ) {
          simulatingWheelAngle += deceleration;
          simulatingWheelAngle %= twoPi;
          if (deceleration < minOutput) continue;
          if (
            simulatingWheelAngle > riggedSectorAngleStart &&
            simulatingWheelAngle < riggedSectorAngleEnd
          )
            possibleSpinDecelerations.push(deceleration / accelerationFactor);
        }
        yield possibleSpinDecelerations[
          Math.floor(Math.random() * possibleSpinDecelerations.length)
        ];
      }
    }
    for (const riggedSpinDeceleration of generateSpinDecelerations())
      if (riggedSpinDeceleration != null && isFinite(riggedSpinDeceleration))
        return riggedSpinDeceleration;
    return defaultFunction();
  } catch (_) {
    return defaultFunction();
  }
};
