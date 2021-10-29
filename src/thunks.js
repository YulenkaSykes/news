import trends from "./reducers/trends";

export const changeTab = (tab) => {
  return (dispatch) => {
    dispatch({ type: "INIT_TAB", payload: tab });
  };
};

export const fetchNews = (value) => {
  return async (dispatch) => {
    const news = await fetch(
      `https://newscatcher.p.rapidapi.com/v1/search_free?q=${value}&lang=en&media=True`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
          "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        },
      }
    );
    const json = await news.json();
    dispatch({ type: "INIT_NEWS", payload: json.articles });
  };
};

export const deleteNews = (news) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_NEWS", payload: news });
  };
};

export const cleanNews = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAN_NEWS" });
  };
};

export const addTrend = (trend) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TREND", payload: trend });
  };
};

export const deleteTrend = (trend) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_TREND", payload: trend });
  };
};
