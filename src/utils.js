export const formatDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${dayOfMonth}, ${month} ${year}`;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const statusOptions = {Pending:'#f0ad4e', Progress:'#0275d8', Completed:'#5cb85c'}