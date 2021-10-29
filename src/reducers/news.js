const news = (news = null, action) => {
  switch (action.type) {
    case "INIT_NEWS":
      return action.payload;
    case "DELETE_NEWS":
      return news.filter((news) => news._id !== action.payload._id);
    case "CLEAN_NEWS":
      return null;
    default:
      return news;
  }
};
export default news;
