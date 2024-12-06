console.log(`Loading computeModifier`);
function computeModifier(points) {
  console.log("computeModifier is called with ", points);
  const modifier =
    (Math.sign(points - 10) > 0 ? "+" : "") + Math.floor((points - 10) / 2);
  console.log("computeModifier returns ", modifier);
  return modifier;
}
return computeModifier(input);
