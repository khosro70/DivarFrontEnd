import * as persianTools from "@persian-tools/persian-tools";
var moment = require("moment-jalaali");
function convertToJalali(dateString: string): string {
  const jalaliDate = moment(dateString).format("jYYYY/jM/jD");
  const persianNumbers = persianTools.digitsEnToFa(jalaliDate);
  return persianNumbers;
}

export { convertToJalali };
