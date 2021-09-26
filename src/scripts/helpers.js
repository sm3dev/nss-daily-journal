export const convertDate = (dateValue) => {
  const dateString = new Date(dateValue);
  const formattedDate = dateString.toDateString();
  return formattedDate;
};

export const addLinebreaks = (anyString) => {
  return anyString.replaceAll("\n", "<br />\r\n");
};
