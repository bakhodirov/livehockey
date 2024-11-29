const calendarBody = document.querySelector('.schedule-table tbody');

function populateCalendar() {
    const daysInMonth = 30; // Example for November
    const startDay = 3; // Example: November starts on a Wednesday
    let day = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if (i === 0 && j < startDay || day > daysInMonth) {
                row.appendChild(cell);
                continue;
            }

            cell.textContent = day;

            if (day === 7 || day === 14) {
                cell.classList.add('event');
                cell.textContent += ' - Game';
            }

            row.appendChild(cell);
            day++;
        }

        calendarBody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', populateCalendar);

const calendarBody = document.querySelector('.calendar tbody');

function populateCalendar() {
    const daysInMonth = 30; // Example: November
    const startDay = 3; // Example: November starts on Wednesday
    let day = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if ((i === 0 && j < startDay) || day > daysInMonth) {
                row.appendChild(cell);
                continue;
            }

            cell.textContent = day;
            if ([7, 14, 21].includes(day)) {
                cell.classList.add('event');
            }

            row.appendChild(cell);
            day++;
        }
        calendarBody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', populateCalendar);
