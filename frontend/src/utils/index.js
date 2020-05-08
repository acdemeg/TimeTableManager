import { library } from '@fortawesome/fontawesome-svg-core';
import bulmaCalendar from 'bulma-calendar';

import {
  faEnvelope,
  faCheck,
  faLock,
  faExclamation,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const compose = (...func) => comp => func.reduceRight((wrapped, f) => f(wrapped), comp);

function initFontAwesomeLibrary() {
  library.add(faEnvelope, faCheck, faLock, faExclamation, faUser);
}

document.addEventListener('DOMContentLoaded', function() {
  const calendars = bulmaCalendar.attach('[type="date"]', { color: 'danger' });
  calendars.forEach(calendar => {
    calendar.on('date:selected', date => {
      console.log(date);
    });
  });

  const element = document.querySelector('#my-element');
  if (element) {
    element.bulmaCalendar.on('select', datepicker => {
      console.log(datepicker.data.value());
    });
  }
});

const getNewIdGenerator = () => {
  const id = 0;
  return () => id + 1;
};

export { compose, initFontAwesomeLibrary, getNewIdGenerator };
