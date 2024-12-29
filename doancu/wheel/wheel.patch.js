(a, b) => {
  // determine default function to use first in case of error
  const [minOutput, maxOutput] = ((a, b) => {
    const defaultA = 0.25;
    const defaultB = 0.35;
    if (a == null && b == null) {
      a = defaultA;
      b = defaultB;
    } else if (a == null) a = (b / defaultB) * defaultA;
    else if (b == null) b = (a / defaultA) * defaultB;
    if (a >= b) return [b, a];
    return [a, b];
  })(a, b);
  const randBetween = (min, max) => Math.random() * (max - min) + min;
  const originalFunction = randBetween;
  const defaultFunction = () => originalFunction(minOutput, maxOutput);
  // anything else can error out if thay want
  try {
    const originalFunctionResult = defaultFunction();
    // gather info stage
    const _astreplace_value_riggedIndexes = undefined;
    const riggedIndexes = _astreplace_value_riggedIndexes ?? [];
    const _astreplace_value_riggedValues = undefined;
    const riggedValues = _astreplace_value_riggedValues ?? [];
    if (riggedValues.length < 1) return originalFunctionResult;
    const _astreplace_value_stopThreshold = undefined;
    const stopThreshold = _astreplace_value_stopThreshold ?? 0.002;
    if (typeof _astreplace_identifier_accelerationFactor === "undefined")
      return originalFunctionResult;
    const accelerationFactor = parseFloat(
      _astreplace_identifier_accelerationFactor
    );
    if (typeof _astreplace_identifier_sectorAngles === "undefined")
      return originalFunctionResult;
    const sectorAngles = _astreplace_identifier_sectorAngles;
    if (typeof _astreplace_identifier_wheelSectors === "undefined")
      return originalFunctionResult;
    const wheelSectors = _astreplace_identifier_wheelSectors;
    if (typeof _astreplace_identifier_currentWheelAngle === "undefined")
      return originalFunctionResult;
    const currentWheelAngle = _astreplace_identifier_currentWheelAngle;
    // don't use Set, we want the more an index appears the more likely it is to be chosen
    const riggedSectorIndexes = [
      ...riggedIndexes.filter(
        (index) => index >= 0 && index < sectorAngles.length
      ),
      ...riggedValues.reduce((indexes, value) => {
        indexes.push(
          ...wheelSectors.reduce((indexes, sectorInfo, index) => {
            if (
              Object.values(sectorInfo)
                .filter((value) => typeof value === "string")
                .some((text) => text == value)
            )
              indexes.push(index);
            return indexes;
          }, [])
        );
        return indexes;
      }, []),
    ];
    // output for calcCurrentSectorIndex
    if (typeof _astreplace_identifier_riggedSectorIndexes !== "undefined")
      _astreplace_identifier_riggedSectorIndexes = riggedSectorIndexes;
    if (riggedSectorIndexes.length < 1) return originalFunctionResult;
    // logic stage
    const twoPi = 2 * Math.PI;
    const minAcceleration = stopThreshold,
      maxAcceleration = (() => {
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
          let deceleration = randBetween(minAcceleration, maxAcceleration);
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
    return originalFunctionResult;
  } catch (_) {
    return defaultFunction();
  }
};
