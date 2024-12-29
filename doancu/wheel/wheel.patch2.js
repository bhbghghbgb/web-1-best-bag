() => {
  if (typeof _astreplace_identifier_sectorAngles === "undefined") return 0;
  const sectorAngles = _astreplace_identifier_sectorAngles;
  if (typeof _astreplace_identifier_currentWheelAngle === "undefined") return 0;
  const currentWheelAngle = _astreplace_identifier_currentWheelAngle;
  const originalFunction = () => {
    let cumulativeAngle = 0;
    for (let i = 0; i < sectorAngles.length; i++) {
      cumulativeAngle += sectorAngles[i];
      if (Math.abs(currentWheelAngle) < cumulativeAngle) {
        return i;
      }
    }
    return 0;
  };
  try {
    const originalFunctionResult = originalFunction();
    if (typeof _astreplace_identifier_spinAcceleration === "undefined")
      return originalFunctionResult;
    const spinAcceleration = _astreplace_identifier_spinAcceleration;
    if (typeof _astreplace_identifier_updateWheelIntervalId === "undefined")
      return originalFunctionResult;
    const updateWheelIntervalId = _astreplace_identifier_updateWheelIntervalId;
    // restore original function if the wheel is spinning
    if (spinAcceleration > 0 || updateWheelIntervalId != null)
      return originalFunctionResult;
    if (typeof _astreplace_identifier_riggedSectorIndexes === "undefined")
      return originalFunctionResult;
    console.log(
      "riggedSectorIndexes",
      _astreplace_identifier_riggedSectorIndexes
    );
    const riggedSectorIndexes = _astreplace_identifier_riggedSectorIndexes;
    // logic stage
    if (
      riggedSectorIndexes.length < 1 ||
      riggedSectorIndexes.includes(originalFunctionResult)
    )
      return originalFunctionResult;
    // this condition happens after we checked that originalFunctionResult is not in riggedSectorIndexes
    // and is there are two sectors, but the originalFunctionResult is not in the riggedSectorIndexes
    // then riggedSectorIndexes should only have one element
    if (riggedSectorIndexes.length === 1 || sectorAngles.length <= 2)
      return riggedSectorIndexes[0];
    const twoPi = 2 * Math.PI;
    const distancesToSectorStart = sectorAngles
      .map(
        (
          (sum) => (value) =>
            (sum += value)
        )(0)
      )
      .map((angle) => {
        const diff = Math.abs(angle - currentWheelAngle) % twoPi;
        return diff > Math.PI ? twoPi - diff : diff;
      });
    const targetIndexes = [...new Set(riggedSectorIndexes)];
    let closetIndex = null;
    let minDistance = Infinity;
    for (const targetIndex of targetIndexes) {
      const distanceToEnd = distancesToSectorStart[targetIndex];
      const previousIndex =
        (targetIndex - 1 + sectorAngles.length) % sectorAngles.length;
      const distanceToStart = distancesToSectorStart[previousIndex];
      const distance = Math.min(distanceToStart, distanceToEnd);
      if (distance < minDistance) {
        minDistance = distance;
        closetIndex = targetIndex;
      } else if (distance === minDistance && targetIndex > closetIndex)
        // because the originalFunction priotizes the latter sector
        // (if currentWheelAngle === cumulativeAngle condition still not stop)
        closetIndex = targetIndex;
    }
    if (closetIndex != null && isFinite(minDistance)) return closetIndex;
    return originalFunctionResult;
  } catch (_) {
    return originalFunction();
  }
};
