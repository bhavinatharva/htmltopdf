const doCalculateAvg = (
  TotalCostOfPreviousShares: number,
  TotalCostOfNewShares: number,
  TotalNumberOfPreviousShares: number,
  TotalNumberOfNewShares: number,
) => {
  let averageCost =
    (TotalCostOfPreviousShares + TotalCostOfNewShares) /
    (TotalNumberOfPreviousShares + TotalNumberOfNewShares);
  return averageCost;
};
export {doCalculateAvg};
