// function to caclulate the euclidean-distance between custom and suburb data vector
export function distance(custom, suburb) {
  let healthDiff = Math.pow(
    custom.healthScore * 10 - suburb.rating.healthScore,
    2
  );
  let educationDiff = Math.pow(
    custom.educationScore * 10 - suburb.rating.educationScore,
    2
  );
  let propertyDiff = 0;
  if (custom.propertyType === "buy") {
    propertyDiff = Math.pow(
      custom.propertyScore * 10 - suburb.rating.propertyBuy,
      2
    );
  } else if (custom.propertyType === "rent") {
    propertyDiff = Math.pow(
      custom.propertyScore * 10 - suburb.rating.propertyRent,
      2
    );
  }
  let jobDiff = Math.pow(custom.jobScore * 10 - suburb.rating.jobScore, 2);

  suburb.difScore = Math.sqrt(
    healthDiff + educationDiff + propertyDiff + jobDiff
  );
  return suburb;
}

export function recommd(customChoice, suburbList) {
  suburbList.map(suburb => distance(customChoice, suburb));
  suburbList.sort(function(a, b) {
    return a.difScore - b.difScore;
  });
  return suburbList;
}
