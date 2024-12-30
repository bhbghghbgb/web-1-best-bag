function sectorDistances_Perplexity(sectorAngles, targetIndexes, inputAngle) {
  // Calculate the cumulative angles for sectors
  let cumulativeAngles = [0];
  for (let angle of sectorAngles) {
    cumulativeAngles.push(
      cumulativeAngles[cumulativeAngles.length - 1] + angle
    );
  }

  // Wrap the input angle to [0, 2π)
  const wrappedInputAngle = inputAngle % (2 * Math.PI);

  // Initialize variables for left and right target sectors
  let closestLeft = null;
  let closestRight = null;

  // Iterate through target indexes to find closest left and right sectors
  for (let index of targetIndexes) {
    const startAngle = cumulativeAngles[index];
    const endAngle = cumulativeAngles[index + 1];

    // Check if the input angle is within the sector range
    if (wrappedInputAngle >= startAngle && wrappedInputAngle < endAngle) {
      closestLeft = index; // Current sector is also the left sector
      closestRight = index; // Current sector is also the right sector
      // Since we're on a targeted sector, both distances should be zero
      return {
        distanceToLeft: 0,
        distanceToRight: 0,
        touchLeft: wrappedInputAngle,
        touchRight: wrappedInputAngle,
      };
    } else if (wrappedInputAngle < startAngle) {
      // If input angle is less than start of this sector, it's a candidate for left
      if (
        closestLeft === null ||
        startAngle < cumulativeAngles[closestLeft + 1]
      ) {
        closestLeft = index - 1; // Previous sector is the left sector
      }
    } else {
      // If input angle is greater than or equal to end, update closest left
      if (closestLeft === null || index > closestLeft) {
        closestLeft = index; // Update to current index as potential left sector
      }
    }
  }

  // Handle wrap-around for left sector
  if (closestLeft === null) {
    closestLeft = targetIndexes[targetIndexes.length - 1]; // Wrap around to last target sector
  }

  // Find the right sector by iterating through again or directly from current position
  for (let index of targetIndexes) {
    const startAngle = cumulativeAngles[index];
    if (wrappedInputAngle < startAngle) {
      closestRight = index; // This is the first sector to the right
      break;
    }
  }

  // If no right sector was found, it means we are at or past the last one, so wrap around to first.
  if (closestRight === null) {
    closestRight = targetIndexes[0];
  }

  // Calculate distances and touch angles
  const leftEndAngle = cumulativeAngles[closestLeft + 1]; // End angle of left sector
  const rightStartAngle = cumulativeAngles[closestRight]; // Start angle of right sector

  let distanceToLeft, distanceToRight;

  // Calculate distances based on wrapping logic
  if (closestLeft !== null) {
    distanceToLeft =
      (wrappedInputAngle - leftEndAngle + 2 * Math.PI) % (2 * Math.PI);

    // Adjust touch angle for left side correctly when wrapping around
    touchLeft = leftEndAngle;
  } else {
    distanceToLeft = Infinity; // No valid left distance found
    touchLeft = null;
  }

  distanceToRight =
    (rightStartAngle - wrappedInputAngle + 2 * Math.PI) % (2 * Math.PI);

  return {
    distanceToLeft,
    distanceToRight,
    touchLeft:
      wrappedInputAngle < rightStartAngle ? wrappedInputAngle : rightStartAngle,
    touchRight: rightStartAngle,
  };
}
function sectorDistances_Github(angles, targets, pointAngle) {
  const TWO_PI = 2 * Math.PI;

  // Normalize the pointAngle to be within [0, 2*PI)
  pointAngle = pointAngle % TWO_PI;
  if (pointAngle < 0) pointAngle += TWO_PI;

  // Calculate the cumulative angle positions for each sector
  let cumulativeAngles = [0];
  for (let i = 0; i < angles.length; i++) {
    cumulativeAngles.push(cumulativeAngles[i] + angles[i]);
  }

  // Function to find the closest left and right target sectors
  function closestTarget(pointAngle, cumulativeAngles, targets) {
    let leftDistance = Infinity;
    let rightDistance = Infinity;
    let leftAngle = null;
    let rightAngle = null;

    for (let target of targets) {
      let targetStart = cumulativeAngles[target];
      let targetEnd = cumulativeAngles[target + 1] % TWO_PI;

      // Check if point is on top (middle) of the target sector
      if (pointAngle >= targetStart && pointAngle <= targetEnd) {
        return {
          leftDistance: 0,
          leftAngle: pointAngle,
          rightDistance: 0,
          rightAngle: pointAngle,
        };
      }

      // Calculate distance to the target sector when moving clockwise
      let clockwiseDistance = (targetStart - pointAngle + TWO_PI) % TWO_PI;
      // Calculate distance to the target sector when moving counter-clockwise
      let counterClockwiseDistance = (pointAngle - targetEnd + TWO_PI) % TWO_PI;

      // Update closest right target sector
      if (clockwiseDistance < rightDistance) {
        rightDistance = clockwiseDistance;
        rightAngle = targetStart;
      }

      // Update closest left target sector
      if (counterClockwiseDistance < leftDistance) {
        leftDistance = counterClockwiseDistance;
        leftAngle = targetEnd;
      }
    }

    return {
      leftDistance,
      leftAngle,
      rightDistance,
      rightAngle,
    };
  }

  return closestTarget(pointAngle, cumulativeAngles, targets);
}
function sectorDistances_Github2(sectorAngles, targetIndexes, pointAngle) {
  const TWO_PI = 2 * Math.PI;

  // Normalize angle to be within 0 to 2π
  function normalizeAngle(angle) {
    return (angle + TWO_PI) % TWO_PI;
  }

  // Accumulate sector starting and ending angles
  let sectors = [];
  let currentAngle = 0;
  for (let i = 0; i < sectorAngles.length; i++) {
    const startAngle = currentAngle;
    const endAngle = normalizeAngle(currentAngle + sectorAngles[i]);
    sectors.push({ startAngle, endAngle });
    currentAngle = endAngle;
  }

  // Find the closest left and right target sectors
  let closestLeft = null;
  let closestRight = null;
  let closestLeftDistance = Infinity;
  let closestRightDistance = Infinity;

  for (let idx of targetIndexes) {
    let { startAngle, endAngle } = sectors[idx];

    // Normalize the start and end angles
    startAngle = normalizeAngle(startAngle);
    endAngle = normalizeAngle(endAngle);

    // Check if the point lies within the target sector
    if (
      (startAngle < endAngle &&
        pointAngle >= startAngle &&
        pointAngle <= endAngle) ||
      (startAngle > endAngle &&
        (pointAngle >= startAngle || pointAngle <= endAngle))
    ) {
      return {
        closestLeftDistance: 0,
        closestLeftAngle: pointAngle,
        closestRightDistance: 0,
        closestRightAngle: pointAngle,
      };
    }

    // Calculate distances in both directions
    let leftDistance = normalizeAngle(pointAngle - startAngle);
    let rightDistance = normalizeAngle(endAngle - pointAngle);

    if (leftDistance < closestLeftDistance) {
      closestLeftDistance = leftDistance;
      closestLeft = normalizeAngle(startAngle);
    }

    if (rightDistance < closestRightDistance) {
      closestRightDistance = rightDistance;
      closestRight = normalizeAngle(endAngle);
    }
  }

  return {
    closestLeftDistance,
    closestLeftAngle: closestLeft,
    closestRightDistance,
    closestRightAngle: closestRight,
  };
}
function sectorDistances_Bing(sectorAngles, targetIndexes, pointAngle) {
  const totalSectors = sectorAngles.length;
  let currentAngle = 0;

  // Calculate the start and end angles of each sector
  const sectors = sectorAngles.map((angle) => {
    const start = currentAngle;
    const end = (currentAngle + angle) % (2 * Math.PI);
    currentAngle = end;
    return { start, end, angle };
  });

  // Calculate the absolute angle distances and touch angles
  const result = {
    left: { distance: Infinity, touchAngle: null },
    right: { distance: Infinity, touchAngle: null },
  };

  targetIndexes.forEach((targetIndex) => {
    const { start, end, angle } = sectors[targetIndex];

    // Calculate distance to the left (counterclockwise to 'end' of the sector)
    const leftTouchAngle = (start - angle + 2 * Math.PI) % (2 * Math.PI);
    const leftDistance =
      (pointAngle - leftTouchAngle + 2 * Math.PI) % (2 * Math.PI);
    if (leftDistance < result.left.distance) {
      result.left.distance = leftDistance;
      result.left.touchAngle = leftTouchAngle;
    }

    // Calculate distance to the right (clockwise to 'start' of the sector)
    const rightTouchAngle = start;
    const rightDistance =
      (rightTouchAngle - pointAngle + 2 * Math.PI) % (2 * Math.PI);
    if (rightDistance < result.right.distance) {
      result.right.distance = rightDistance;
      result.right.touchAngle = rightTouchAngle;
    }
  });

  return result;
}
function sectorDistances_Gemini(sectorAngles, targetIndexes, pointAngle) {
  const numSectors = sectorAngles.length;
  const totalAngle = 2 * Math.PI;

  // Calculate cumulative angles for each sector
  const cumulativeAngles = [];
  let currentAngle = 0;
  for (let i = 0; i < numSectors; i++) {
    cumulativeAngles.push(currentAngle);
    currentAngle += sectorAngles[i];
  }

  // Find the sector index containing the point
  let pointSectorIndex = 0;
  while (pointAngle >= cumulativeAngles[pointSectorIndex + 1]) {
    pointSectorIndex++;
  }

  // Helper function to find closest sector in a given direction
  function findClosestSector(direction) {
    let closestDistance = Infinity;
    let closestSectorIndex = -1;
    let closestTouchAngle = 0;

    let currentSectorIndex = pointSectorIndex;
    let currentAngle = pointAngle;

    while (true) {
      // Check if current sector is a target
      if (targetIndexes.includes(currentSectorIndex)) {
        // Calculate distance and touch angle based on direction
        if (direction === "left") {
          closestDistance = Math.abs(
            cumulativeAngles[currentSectorIndex] - pointAngle
          );
          closestTouchAngle = cumulativeAngles[currentSectorIndex];
        } else if (direction === "right") {
          closestDistance = Math.abs(
            pointAngle - cumulativeAngles[currentSectorIndex]
          );
          closestTouchAngle = cumulativeAngles[currentSectorIndex];
        }

        if (closestDistance < Infinity) {
          closestSectorIndex = currentSectorIndex;
          break;
        }
      }

      // Move to the next sector in the given direction
      if (direction === "left") {
        currentSectorIndex = (currentSectorIndex - 1 + numSectors) % numSectors;
        currentAngle = currentAngle - sectorAngles[currentSectorIndex];
        if (currentAngle < 0) {
          currentAngle += totalAngle;
        }
      } else if (direction === "right") {
        currentSectorIndex = (currentSectorIndex + 1) % numSectors;
        currentAngle = currentAngle + sectorAngles[currentSectorIndex];
        if (currentAngle >= totalAngle) {
          currentAngle -= totalAngle;
        }
      }
    }

    return {
      distance: closestDistance,
      sectorIndex: closestSectorIndex,
      touchAngle: closestTouchAngle,
    };
  }

  // Calculate distances to closest left and right sectors
  const closestLeft = findClosestSector("left");
  const closestRight = findClosestSector("right");

  return { left: closestLeft, right: closestRight };
}
function sectorDistances_Chatgpt(angles, targetIndexes, point) {
  // Calculate the sector boundaries (start and end angles)
  let sectorBoundaries = [];
  let currentAngle = 0;

  for (let i = 0; i < angles.length; i++) {
    let sectorEnd = currentAngle + angles[i];
    sectorBoundaries.push([currentAngle, sectorEnd]);
    currentAngle = sectorEnd; // move to the start of the next sector
  }

  // Function to find the closest sector in a given direction
  function findClosestSector(sectors, targetIndexes, point, direction) {
    let closestIndex = -1;
    let closestDistance = Infinity;
    let touchAngle = -1;

    for (let i = 0; i < targetIndexes.length; i++) {
      let idx = targetIndexes[i];
      let [start, end] = sectors[idx];

      // Normalize the point angle and the sector start/end angles
      if (direction === "clockwise") {
        // Calculate distance when moving clockwise
        if (point <= end && point >= start) {
          closestDistance = 0;
          touchAngle = start; // touching the start of the sector
          closestIndex = idx;
        } else if (point < start) {
          let dist = start - point;
          if (dist < closestDistance) {
            closestDistance = dist;
            touchAngle = start;
            closestIndex = idx;
          }
        } else if (point > end) {
          let dist = 2 * Math.PI - point + start;
          if (dist < closestDistance) {
            closestDistance = dist;
            touchAngle = start;
            closestIndex = idx;
          }
        }
      } else if (direction === "counterclockwise") {
        // Calculate distance when moving counterclockwise
        if (point >= start && point <= end) {
          closestDistance = 0;
          touchAngle = end; // touching the end of the sector
          closestIndex = idx;
        } else if (point > end) {
          let dist = point - end;
          if (dist < closestDistance) {
            closestDistance = dist;
            touchAngle = end;
            closestIndex = idx;
          }
        } else if (point < start) {
          let dist = point + (2 * Math.PI - start);
          if (dist < closestDistance) {
            closestDistance = dist;
            touchAngle = end;
            closestIndex = idx;
          }
        }
      }
    }

    return { closestIndex, closestDistance, touchAngle };
  }

  // Find closest clockwise and counterclockwise sectors
  let clockwiseResult = findClosestSector(
    sectorBoundaries,
    targetIndexes,
    point,
    "clockwise"
  );
  let counterclockwiseResult = findClosestSector(
    sectorBoundaries,
    targetIndexes,
    point,
    "counterclockwise"
  );

  return {
    clockwise: clockwiseResult,
    counterclockwise: counterclockwiseResult,
  };
}
function convertToPiFormat(obj) {
  if (typeof obj === "number") {
    return `${obj / Math.PI}*PI`;
  } else if (Array.isArray(obj)) {
    return obj.map((num) => `${num / Math.PI}*PI`);
  } else if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        newObj[key] = convertToPiFormat(obj[key]);
      } else if (
        key.toLowerCase().includes("distance") ||
        key.toLowerCase().includes("angle") ||
        key.toLowerCase().includes("touch")
      ) {
        newObj[key] = `${obj[key] / Math.PI}*PI`;
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  return obj;
}
// Example usage:
const sectorAngles = [
  Math.PI / 4,
  Math.PI / 4,
  Math.PI / 2,
  Math.PI / 4,
  Math.PI / 8,
  (5 * Math.PI) / 8,
]; // Example angles in radians
const targetIndexes = [0, 4]; // Indices of sectors we are interested in
// const targetIndexes = [1, 2]; // Indices of sectors we are interested in
const inputPointAngle = Math.PI / 2 - Math.PI / 8; // Input angle in radians
// const inputPointAngle = Math.PI / 2; // Input angle in radians
// const inputPointAngle = Math.PI - Math.PI / 8; // Input angle in radians
console.log("sectorAngles", convertToPiFormat(sectorAngles));
console.log(
  "sectorAnglesTotal",
  convertToPiFormat(sectorAngles.reduce((a, b) => a + b, 0))
);
console.log("targetIndexes", targetIndexes);
console.log("inputPointAngle", convertToPiFormat(inputPointAngle));
console.log(
  "sectorDistances_Perplexity",
  convertToPiFormat(
    sectorDistances_Perplexity(sectorAngles, targetIndexes, inputPointAngle)
  )
);
console.log(
  "sectorDistances_Github",
  convertToPiFormat(
    sectorDistances_Github(sectorAngles, targetIndexes, inputPointAngle)
  )
);
console.log(
  "sectorDistances_Github2",
  convertToPiFormat(
    sectorDistances_Github(sectorAngles, targetIndexes, inputPointAngle)
  )
);
console.log(
  "sectorDistances_Bing",
  convertToPiFormat(
    sectorDistances_Bing(sectorAngles, targetIndexes, inputPointAngle)
  )
);
console.log(
  "sectorDistances_Gemini",
  convertToPiFormat(
    sectorDistances_Gemini(sectorAngles, targetIndexes, inputPointAngle)
  )
);
console.log(
  "sectorDistances_Chatgpt",
  convertToPiFormat(
    sectorDistances_Chatgpt(sectorAngles, targetIndexes, inputPointAngle)
  )
);
debugger;
