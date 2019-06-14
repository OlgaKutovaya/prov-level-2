const getCurrentDate = () => {
   let today = new Date();
   today.setHours(0,0,0,0);
   return today
};

const filterByExpiration = (items) => {
   let currentDate = getCurrentDate();

   return items.filter((item) => {
      return new Date(item.expirationDate) > currentDate
   });
};
