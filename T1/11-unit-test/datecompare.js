// dateCompare.js
function dateCompare(date1, date2 = new Date()) {
    const startDate = new Date(date1) < new Date(date2) ? date1 : date2;
    const endDate = new Date(date1) > new Date(date2) ? date1 : date2;
  
    return {
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString()
    };
  }
  
  module.exports = dateCompare;
  