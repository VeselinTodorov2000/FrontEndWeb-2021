"use strict";
//2.1 В масив добавете текущата дата
let dates = [];
let dateNow = new Date();

  dates.push(dateNow);
console.log(dates);

//2.2 След това добавете нова дата 08.12.2018. Променете часа на 21:00:00
let december8 = new Date(2018, 11, 8, 21);
dates.push(december8);
console.log(dates);
//2.3 След това създайте програмно втори масив, който за датите пресмята броя дни в месеца и какъв ден от седмицата(0-неделя, 6-събота) е дадената дата. Ако днес е 11.11.2018 година, крайния резултат би трябвало да изглежда така: Масив 1: [< dateObject>, < dateObject>] където първия обект съдържа датата 11.11.2018, а втория 08.12.2018. Масив 2: [[30,0], [31, 6]
function numberOfDays(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

let datesInfo = dates.map(date => [numberOfDays(date), date.getDay()]);

console.log(datesInfo);

//2.4 Създайте трети масив, който „слива“ информацията от двата, например: Масив 3: [ “Дата: 11.11.2018, час: 00:00:00, неделя. 30 дни”, “Дата 08.12.2018, час 21:00:00, събота, 31 дни” ]

function dayOfWeekToString(index) {
  let daysName = ["понеделник", "вторник", "сряда", "четвъртък", "петък", "събота", "неделя"];
  return daysName[index];	
 }
    
let combined = dates.map((date, index) => {
 return `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, час: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${dayOfWeekToString(datesInfo[index][1])}, ${datesInfo[index][0]} дни`
});

console.log(combined);