export const trends = (
  trends = localStorage.getItem("trends")
    ? JSON.parse(localStorage.getItem("trends"))
    : [],
  action
) => {
  switch (action.type) {
    case "ADD_TREND":
      return [...trends, action.payload];
    case "DELETE_TREND":
      return trends.filter((trend) => trend !== action.payload);
    default:
      return trends;
  }
};
export default trends;
