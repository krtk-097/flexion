export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "ffe4d82bdamsh33ac1650bfd4cdbp14317fjsn79a87b8074aa",
  },
};
export const BMIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ffe4d82bdamsh33ac1650bfd4cdbp14317fjsn79a87b8074aa",
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
