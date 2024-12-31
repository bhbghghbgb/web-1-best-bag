{
  const t = 0.002;
  const u = 0.991;
  const y = 0.25;

  const x = Math.log(t / y) / Math.log(u);
  console.log(x);

  const j = (t * (1 - Math.pow(1 / u, Math.ceil(x + 1)))) / (1 - 1 / u);
  console.log(j);
}

{
  const t = 0.002015226283744499;
  const u = 0.98;
  const y = 0.3480763508436485;

  const x = Math.log(t / y) / Math.log(u);
  console.log(x);

  const j = (t * (1 - Math.pow(1 / u, Math.ceil(x + 1)))) / (1 - 1 / u);
  console.log(j);
}

// {
//   "startingDeceleration": 0.002015226283744499,
//   "finishDeceleration": 0.3480763508436485,
//   "simulatedWheelAngle": 17.305071454278938,
//   "maxOutput": 0.35,
//   "accelerationFactor": 0.98,
//   "iterCount": 256
// }
