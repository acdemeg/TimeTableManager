import { library } from '@fortawesome/fontawesome-svg-core';
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

export { compose, initFontAwesomeLibrary };
