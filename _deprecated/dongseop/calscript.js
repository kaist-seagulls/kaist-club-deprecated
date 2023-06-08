const sampleData = [
    {
        club: "k-let",
        eventName: "spring volunteer",
        startDay: new Date(2023, 5, 1),
        endDay: new Date(2023, 5, 3)
    },
    {
        club: "number",
        eventName: "acting class",
        startDay: new Date(2023, 5, 1),
        endDay: new Date(2023, 5, 10)
    },
    {
        club: "k-let",
        eventName: "funding",
        startDay: new Date(2023, 5, 5),
        endDay: new Date(2023, 5, 15)
    },
    {
        club: "number",
        eventName: "stage preparation",
        startDay: new Date(2023, 5, 22),
        endDay: new Date(2023, 5, 24)
    },
    {
        club: "k-let",
        eventName: "international food festival",
        startDay: new Date(2023, 5, 20),
        endDay: new Date(2023, 5, 29)
    },
];

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

async function renderCalendar() {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(),
    index = 0; // getting last date of previous month

    daysTag.innerHTML="<div class=\"row week\">\
    <div style=\"color:red\" class=\"col text-center\">Sun</div>\
      <div class=\"col text-center\">Mon</div>\
      <div class=\"col text-center\">Tue</div>\
      <div class=\"col text-center\">Wed</div>\
      <div class=\"col text-center\">Thu</div>\
      <div class=\"col text-center\">Fri</div>\
    <div style=\"color:blue\"  class=\"col text-center\">Sat</div>\
  </div>";
    let week;

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        if (index % 7 == 0) {
            week = document.createElement('div');
            week.classList.add('row');
            week.classList.add('week');
            daysTag.appendChild(week);
        }

        let day = document.createElement('div');
        day.classList.add('inactive');
        day.classList.add('day');
        day.classList.add('col');
        day.classList.add('p-0');

        let dayEvent = document.createElement('div');
        dayEvent.classList.add('inactive');
        dayEvent.classList.add('date');
        dayEvent.classList.add('row');
        dayEvent.classList.add('container');
        let circle = document.createElement('div');
        circle.classList.add('col');
        circle.classList.add('text-center');
        circle.innerHTML = lastDateofLastMonth - i + 1;
        dayEvent.appendChild(circle);
        day.appendChild(dayEvent);

        // append day event group
        for (let i=0; i<4; i++) {
            let li = document.createElement('div');
            li.classList.add('event');
            li.classList.add('row');
            day.appendChild(li);
        }
        
        week.appendChild(day);
        index++;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";

        if (index % 7 == 0) {
            week = document.createElement('div');
            week.classList.add('row');
            week.classList.add('week');
            daysTag.appendChild(week);
        }

        let day = document.createElement('div');
        day.classList.add('day');
        day.classList.add('col');
        day.classList.add('p-0');
        
        let dayEvent = document.createElement('div');
        dayEvent.classList.add('date');
        dayEvent.classList.add('row');
        dayEvent.classList.add('container');
        if (isToday) dayEvent.classList.add(isToday);
        let circle = document.createElement('div');
        circle.classList.add('col');
        circle.classList.add('text-center');
        circle.innerHTML = i;
        dayEvent.appendChild(circle);
        day.appendChild(dayEvent);

        // append day event group
        for (let i=0; i<4; i++) {
            let li = document.createElement('div');
            li.classList.add('event');
            li.classList.add('row');
            li.classList.add('px-1');
            day.appendChild(li);
        }
        
        week.appendChild(day);
        index++;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        //liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        let day = document.createElement('div');
        day.classList.add('inactive');
        day.classList.add('day');
        day.classList.add('col');
        day.classList.add('p-0');

        let dayEvent = document.createElement('div');
        dayEvent.classList.add('inactive');
        dayEvent.classList.add('date');
        dayEvent.classList.add('row');
        dayEvent.classList.add('container');
        let circle = document.createElement('div');
        circle.classList.add('col');
        circle.classList.add('justify-content-center');
        circle.classList.add('text-center');
        
        circle.innerHTML = i - lastDayofMonth + 1;
        dayEvent.appendChild(circle);
        day.appendChild(dayEvent);

        // append day event group
        for (let i=0; i<4; i++) {
            let li = document.createElement('div');
            li.classList.add('event');
            li.classList.add('row');
            li.style.overflow = "hidden";
            li.style.textOverflow = "ellipses";
            day.appendChild(li);
        }
        
        week.appendChild(day);
        index++;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    //daysTag.innerHTML = liTag;
}

const applyEvents = (events) => {
    let eventIndex = 1;
    let tempDate = 0;
    events = events.sort(function(a, b) {
        if (a.startDay > b.startDay) return 1;
        else return -1;
    });
    let applied = new Array();

    while (applied.length < events.length) {
        for (i in events) {
            if ((events[i].startDay.getDate() > tempDate) && !(applied.includes(i))) {
                applyEvent(events[i], eventIndex);
                tempDate = events[i].endDay.getDate();
                applied.push(i);
            }
        }
        eventIndex++;
        tempDate = 0;
    }
}

const applyEvent = (e, index) => {
    let startDate = e.startDay.getDate();
    let endDate = e.endDay.getDate();
    let days = document.getElementsByClassName('day');
    const colorlist = ['#0d6efd', '#6f42c1', '#d63384', '#fd7e14', '#198754', '#0dcaf0'];
    let color = colorlist[Math.floor(Math.random()*colorlist.length)];

    for (let i=0; i<days.length; i++) {
        let day = days[i];
        let date = parseInt(day.children[0].innerText);
        if (day.classList.contains('inactive') || date < startDate || endDate < date) continue;
        if (startDate == date || date == 1) {
            day.children[index].innerText = e.eventName;
        }
        eventSlot = day.children[index];
        eventSlot.style.backgroundColor = color;
        eventSlot.style.color = '#003547';
    }
}


renderCalendar().then(applyEvents(sampleData));

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar().then(applyEvents(sampleData)); // calling renderCalendar function
    });
});
