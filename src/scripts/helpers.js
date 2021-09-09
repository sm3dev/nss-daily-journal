export const convertDate = (dateValue) => {
    const dateString = new Date(dateValue);
    const formattedDate = dateString.toDateString();
    return formattedDate;
}