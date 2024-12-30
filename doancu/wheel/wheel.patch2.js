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
    const twoPi = 2 * Math.PI;
    const riggedSectorIndexes = _astreplace_identifier_riggedSectorIndexes;
    // logic stage
    // left/right is opposite on the wheel
    const [closetRight, closetLeft] = (() => {
      const target = originalFunctionResult;
      let min = Infinity;
      let max = -Infinity;
      let left = -Infinity;
      let right = Infinity;
      for (const num of riggedSectorIndexes) {
        if (num === target) return [target, target];
        if (num < min) min = num;
        if (num > max) max = num;
        if (num < target && num > left) left = num;
        if (num > target && num < right) right = num;
      }
      if (!isFinite(left)) left = max;
      if (!isFinite(right)) right = min;
      return [left, right];
    })();
    if (
      !isFinite(closetLeft) ||
      !isFinite(closetRight) ||
      closetLeft === originalFunctionResult
    )
      return originalFunctionResult;
    const snapToClosest = (leftIndex, rightIndex) => {
      const relativeToTarget = (targetIndex, isLeft) => {
        const cumulativeAngles = (() => {
          const acc = [0];
          for (let i = 0; i < sectorAngles.length; i++) {
            acc.push(acc[i] + sectorAngles[i]);
          }
          return acc;
        })();
        const targetStart = cumulativeAngles[targetIndex];
        const targetEnd = cumulativeAngles[targetIndex + 1] % twoPi;
        if (isLeft)
          return [
            (targetStart - currentWheelAngle + twoPi) % twoPi,
            targetStart,
          ];
        return [(currentWheelAngle - targetEnd + twoPi) % twoPi, targetEnd];
      };
      const [distanceLeft, snapLeft] = relativeToTarget(leftIndex, true);
      const [distanceRight, snapRight] = relativeToTarget(rightIndex, false);
      function trySnapDisplay(snapAngle, toLeft) {
        const ensureRestOnSector =
          toLeft != null ? (toLeft ? +Number.EPSILON : -Number.EPSILON) : 0;
        _astreplace_identifier_currentWheelAngle =
          (snapAngle + ensureRestOnSector) % twoPi;
        if (typeof _astreplace_identifier_updateWheelDisplay !== "undefined")
          _astreplace_identifier_updateWheelDisplay();
      }
      // priotize left, because the spin direction is clockwise
      if (distanceLeft <= distanceRight) {
        trySnapDisplay(snapLeft);
        return leftIndex;
      }
      trySnapDisplay(snapRight);
      return rightIndex;
    };
    // there is only one target at all
    // actually no need to check, this just here to debug easier
    if (closetLeft === closetRight)
      return snapToClosest(closetLeft, closetLeft);
    return snapToClosest(closetLeft, closetRight);
  } catch (_) {
    return originalFunction();
  }
};
