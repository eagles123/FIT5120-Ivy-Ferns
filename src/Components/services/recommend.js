// function to caclulate the euclidean-distance between custom and suburb data vector
import _ from "lodash";
export function distance(custom, suburb) {
  let healthDiff = Math.pow(
    custom.healthScore * 10 - suburb.rating.healthScore,
    2
  );

  // console.log(healthDiff);

  let educationDiff = Math.pow(
    custom.educationScore * 10 - suburb.rating.educationScore,
    2
  );
  // console.log(educationDiff);

  // let propertyDiff = Math.pow(
  //   custom.propertyScore * 10 - suburb.rating.propertyScore
  // );
  let propertyDiff = Math.pow(
    custom.propertyScore * 10 - suburb.rating.propetyScore,
    2
  );

  let jobDiff = Math.pow(custom.jobScore * 10 - suburb.rating.jobScore, 2);
  // console.log(jobDiff);

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

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
