// function to caclulate the euclidean-distance between custom and suburb data vector
import _ from "lodash";

export function distance(scoreState, suburb) {
  //caculate health different score
  let healthDiff;
  if (scoreState.healthScore === 0) healthDiff = 0;
  else
    healthDiff = Math.pow(
      scoreState.healthScore * 10 - suburb.rating.healthScore,
      2
    );
  //cacluate education difference score
  let educationDiff;
  if (scoreState.educationScore === 0) educationDiff = 0;
  else
    educationDiff = Math.pow(
      scoreState.educationScore * 10 - suburb.rating.educationScore,
      2
    );
  //calculate property difference score
  let propertyDiff;
  if (scoreState.propertyScore === 0) propertyDiff = 0;
  else
    propertyDiff = Math.pow(
      10 - scoreState.propertyScore * 10 - suburb.rating.propertyScore,
      2
    );
  //olde feature to calculate job differenct score, keep it increase we need to bring it back

  // let jobDiff;
  // if (scoreState.jobScore === 0) jobDiff = 0;
  // jobDiff = Math.pow(scoreState.jobScore * 10 - suburb.rating.jobScore, 2);

  //formular of Euclidean distance
  suburb.difScore = Math.sqrt(healthDiff + educationDiff + propertyDiff);
  return suburb;
}

//function to sort the suburb list based on diff score
export function recommd(scoreState, suburbList) {
  suburbList.map(suburb => distance(scoreState, suburb));
  suburbList.sort(function(a, b) {
    return a.difScore - b.difScore;
  });
  rank(suburbList);
  return suburbList;
}

//add an rank field for the suburblist based on the sorted result
function rank(suburbList) {
  suburbList.map(subrub => (subrub.rank = suburbList.indexOf(subrub) + 1));
}

//function of pagination based on the sorted suburb list
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
