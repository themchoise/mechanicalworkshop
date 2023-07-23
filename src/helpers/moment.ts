
const moment  = require('moment');

function getCurrentDate(format:string): string {
    let date = new Date();
    return moment(date).utc(-3).format(format);

  }

export default getCurrentDate;