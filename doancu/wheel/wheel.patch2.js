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
    const riggedSectorIndexes = _astreplace_identifier_riggedSectorIndexes;
    // logic stage
    const targetIndexes = [...new Set(riggedSectorIndexes)];
    if (
      targetIndexes.length < 1 ||
      targetIndexes.includes(originalFunctionResult)
    )
      return originalFunctionResult;
    const twoPi = 2 * Math.PI;
    const [resultIndex, snapAngle] = (() => {
      const cumulativeAngle = sectorAngles.map(
        (
          (sum) => (value) =>
            (sum += value)
        )(0)
      );
      const distancesToSectorStart = cumulativeAngle.map((angle) => {
        const diff = Math.abs(angle - currentWheelAngle) % twoPi;
        return diff > Math.PI ? twoPi - diff : diff;
      });
      // this condition happens after we checked that originalFunctionResult is not in targetIndexes
      // and is there are two sectors, but the originalFunctionResult is not in the targetIndexes
      // then targetIndexes should only have one element
      const sectorCount = sectorAngles.length;
      const indexResult = (index) => {
        const previousIndex = (index - 1 + sectorCount) % sectorCount;
        const distanceToEnd = distancesToSectorStart[index];
        const distanceToStart = distancesToSectorStart[previousIndex];
        const minDistance = Math.min(distanceToStart, distanceToEnd);
        // on the right side
        if (minDistance < distanceToStart)
          return [minDistance, cumulativeAngle[index] - Number.EPSILON];
        // on the left side
        return [minDistance, cumulativeAngle[previousIndex] + Number.EPSILON];
      };
      if (targetIndexes.length === 1 || sectorCount <= 2)
        return [targetIndexes[0], indexResult(targetIndexes[0])[1]];
      let closetIndex = null;
      let minDistance = Infinity;
      let snappedAngle = null;
      for (const targetIndex of targetIndexes) {
        const [distance, snapAngle] = indexResult(targetIndex);
        if (distance > minDistance) continue;
        if (distance < minDistance) {
          minDistance = distance;
          closetIndex = targetIndex;
        } else if (targetIndex > closetIndex)
          // because the originalFunction priotizes the latter sector
          // (if currentWheelAngle === cumulativeAngle condition still not stop)
          closetIndex = targetIndex;
        snappedAngle = snapAngle;
      }
      if (closetIndex != null && isFinite(minDistance))
        return [closetIndex, snappedAngle];
      return [null, null];
    })();
    if (resultIndex == null) return originalFunctionResult;
    if (snapAngle != null) {
      _astreplace_identifier_currentWheelAngle = snapAngle % twoPi;
      if (typeof _astreplace_identifier_updateWheelDisplay !== "undefined")
        _astreplace_identifier_updateWheelDisplay();
    }
    return resultIndex;
  } catch (_) {
    return originalFunction();
  }
};
