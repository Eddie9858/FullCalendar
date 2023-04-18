const dais = document.querySelector(".day");
const dates = document.querySelector(".date");
const months = document.querySelector(".month");
const years = document.querySelector(".year");

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const date = new Date();

dais.textContent = days[date.getDay()];

dates.textContent = date.getDate();

years.textContent = date.getFullYear();

months.textContent = monthNames[date.getMonth()];

var yyyy = date.getFullYear();
var mm = date.getMonth() + 1;
const today = date.getDate();

var lastDate = new Date(yyyy, mm, 0);
var lastDateMonth = lastDate.getDate();


var startDay = new Date(yyyy,mm-1,1);
var startDayMonth = startDay.getDay();


var calendarWeekCount = Math.ceil((startDayMonth + lastDateMonth) / 7);

const body = document.querySelector("section");

const thead = document.createElement("thead");

const tableElement = document.querySelector("table");

tableElement.appendChild (thead);

const theadElement = document.querySelector("thead");

const trElement = document.querySelector("tr");

for(var i = 0; i < calendarWeekCount + 1; i++){
    const trElement = document.createElement("tr");
    theadElement.appendChild(trElement);
    for(let j =0; j < 7; j++){
    const thElement = document.createElement("th");
    trElement.appendChild(thElement);
    }
}

const day = document.querySelectorAll("th");

for(let i =0; i<days.length;i++){
    day[i].textContent = days[i];
}

for(let i =0; i < lastDate.getDate(); i++){

    day[startDay.getDay() + 7 + i].textContent = startDay.getDate() + i;
}
for(let i =0; i< 49;  i ++){
    day[i].addEventListener("click",function(){
        dates.textContent = day[i].textContent;
        const clickedDate = (new Date(yyyy,mm - 1,day[i].textContent));
        dais.textContent = days[clickedDate.getDay()];
    });
}
function changingmonth() {
    for(let i = 0; i < 49; i++){
        day[i].textContent = " ";
    }
    for(let i =0; i<days.length;i++){
        day[i].textContent = days[i];
    }
    for(let i =0; i < lastDate.getDate(); i++){
        day[startDay.getDay() + 7 + i].textContent = startDay.getDate() + i;
        if((date.getMonth()+1) == mm && yyyy == date.getFullYear()){
            day[today+7+startDayMonth - 1].style.color = "red";
        } else {
            day[i].style.color = "black";
        }
    }
}


const rightbutton = document.querySelector(".right");
const leftbutton = document.querySelector(".left");

function nextmonth(){
    mm++;
    calmonth();
    months.textContent = monthNames[mm-1];
    if(mm > 11){
        mm = 0;
        yyyy++;
        years.textContent = yyyy;
    }

    changingmonth();
}

function prevmonth() {
    mm--;
    calmonth();
    months.textContent = monthNames[mm - 1];
    if(mm<2){
        mm=13;
        yyyy--;
        years.textContent = yyyy;
    }

    changingmonth();
}

rightbutton.addEventListener("click",nextmonth);
leftbutton.addEventListener("click",prevmonth);

function calmonth() {

    startDay = new Date(yyyy,mm-1,1);
    startDayMonth = startDay.getDay();

    lastDate = new Date(yyyy, mm, 0);
    lastDateMonth = lastDate.getDate();

    calendarWeekCount = Math.ceil((startDayMonth + lastDateMonth) / 7);

}
changingmonth();


