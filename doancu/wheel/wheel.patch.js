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
    const randSample = (array) =>
      array[Math.floor(Math.random() * array.length)];
    // logic stage
    const twoPi = 2 * Math.PI;
    // the range of possible starting acceleration values, the following acceleration value
    // of the one in this range will fall below stop threshold and the wheel is stopped
    // without its rotation being added this value
    const minAccelerationBeforeStop = stopThreshold,
      maxAccelerationBeforeStop = (() => {
        const higherBound = stopThreshold / accelerationFactor;
        return higherBound - (higherBound - stopThreshold) / 100;
      })();
    function* generateSpinAccelerations() {
      const riggedAngles = riggedSectorIndexes.map((index) => {
        const start = sectorAngles
          .slice(0, index)
          .reduce((acc, angle) => acc + angle, 0);
        const end = start + sectorAngles[index];
        return [start, end];
      });
      let attemptCount = 1;
      // this is used in case could not find any possible output after some iterations
      let currentMinOutput = minOutput;
      let currentMaxOutput = maxOutput;
      const outputBackoffRange = 0.1;
      const absoluteMaxOutput = 0.75;
      // stores the closet point we can visit on the wheel, so that when we couldn't find
      // a good result in the end, we can still rely on the 'snap' patch
      let closetDistance = Infinity;
      let accelerationAtClosetDistance = originalFunctionResult;
      while (true) {
        if (attemptCount % 10 === 0) {
          currentMinOutput = currentMaxOutput;
          currentMaxOutput += outputBackoffRange;
        }
        if (currentMaxOutput > absoluteMaxOutput) {
          yield accelerationAtClosetDistance;
          // exhausted all options...
          return;
        }
        const riggedIndex = randSample(riggedSectorIndexes);
        const [riggedAngleStart, riggedAngleEnd] =
          riggedAngles[riggedSectorIndexes.indexOf(riggedIndex)];
        const riggedCenter = (riggedAngleStart + riggedAngleEnd) / 2;
        const possibleSpinAccelerations = [];
        // test all positions of the wheel where the starting acceleration value can start from
        // by reversing the wheel slow down process (acceleration reducing)
        for (
          // all acceleration values lower than minOutput cannot be used
          // we can effectively jump to after the acceleration value is already higher than minOutput
          // while obtaining the wheel angle (which is a sum of all previous acceleration values)
          // and the acceleration at that point by using a bit of math
          let [simulatingAngle, acceleration] = (() => {
            const a = randBetween(
              minAccelerationBeforeStop,
              maxAccelerationBeforeStop
            );
            const r = accelerationFactor;
            const y = currentMinOutput;
            const c = currentWheelAngle;
            // solve for n: y = a / r ^ n
            const n = Math.log(a / y) / Math.log(r);
            // because we need target values larger than minOuput, so round up
            const N = Math.ceil(n);
            // get the next 'acceleration' value after it's larger than minOutput
            const d = a / Math.pow(r, N);
            const k = N + 1;
            const x = 1 / r;
            // get the sum of all previous acceleration values (the total rotation/angle travelled)
            // BEFORE 'acceleration' starts to get larger than minOutput
            // geometric series: sum(k=0 -> n-1, ax^k) = a(1-x^n)/(1-x) = a(1-(1/r)^n)/(1-(1/r))
            const s = (a * (1 - Math.pow(x, k))) / (1 - x);
            // remember to add current wheel rotation to the sum
            // this sum is already added the current acceleration
            const S = s + c;
            return [S, d];
          })();
          acceleration <= currentMaxOutput;
          simulatingAngle += acceleration, acceleration /= accelerationFactor
        ) {
          const normalizedAngle = simulatingAngle % twoPi;
          if (
            normalizedAngle >= riggedAngleStart &&
            normalizedAngle <= riggedAngleEnd
          )
            // the acceleration value is reduced (spinDecrement *= decelerationFactor)
            // BEFORE it's even tested to be lower than threshold, account for that by explicitly
            // increasing it so that it will already be reduced to the intended value when it's tested
            possibleSpinAccelerations.push(acceleration / accelerationFactor);
          // update the closet point we can visit
          else if (possibleSpinAccelerations.length === 0) {
            const diff = Math.abs(normalizedAngle - riggedCenter) % twoPi;
            const distance = diff > Math.PI ? twoPi - diff : diff;
            if (distance < closetDistance) {
              accelerationAtClosetDistance = acceleration;
              closetDistance = distance;
            }
          }
        }
        attemptCount++;
        yield randSample(possibleSpinAccelerations);
      }
    }
    for (const riggedSpinAcceleration of generateSpinAccelerations())
      if (riggedSpinAcceleration != null && isFinite(riggedSpinAcceleration))
        return riggedSpinAcceleration;
    return originalFunctionResult;
  } catch (_) {
    return defaultFunction();
  }
};
