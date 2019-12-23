/**
 * Retrieves username from email. Handled this way because of fixed number of users
 * and because when users are manually added to firebase the display name cannot be set manually.
 * @param {String} email The email by which the username is retrieved.
 * @returns {String} The username of user from email
 */
function getDisplayNameFromEmail(email) {
  switch (email) {
    case 'petra.bratic97@gmail.com':
      return 'Petra B.';
    case 'tanja.striskovic@gmail.com':
      return 'Tanja S.';
    case 'mickoviclana@gmail.com':
      return 'Lana M.';
    case 'damjan.dzakula1997@gmail.com':
      return 'Damjan D.';
    case 'vperkovic00@gmail.com':
      return 'Valentina P.';
    case 'i.filipcic0@gmail.com':
      return 'Ivana F.';
    case 'robert.dumancic1@gmail.com':
      return 'Robert D.';
    case 'mihajlo.jakovic@gmail.com':
      return 'Mihajlo J.';
    case 'renata_matic@hotmail.com':
      return 'Renata M.';
    case 'morana.scuric@gmail.com':
      return 'Morana S.';
    case 'suncanavukovic11@gmail.com':
      return 'Suncana V.';
    case 'raic.anja@gmail.com':
      return 'Anja R.';
    case 'jhorvat93@gmail.com':
      return 'Jurica H.';
    case 'magibogovic@gmail.com':
      return 'Magdalena B.';
    case 'josip_miljkovic@hotmail.com':
      return 'Josip M.';
    case 'elizabeta.pongrac@gmail.com':
      return 'Elizabeta P.';
    case 'troskot54@gmail.com':
      return 'Marko T.';
    default:
      return 'UserX';
  }
}

function isEmpty(str) {
  return str === null || str === undefined || str.trim() === '';
}

function areEmpty(...strings) {
  return strings.some(str => str === null || str === undefined || str.trim() === '');
}

function isNotEmpty(str) {
  return !isEmpty(str);
}

function areNotEmpty(...strings) {
  return !areEmpty(...strings);
}

export default {
  getDisplayNameFromEmail,
  isNotEmpty,
  areNotEmpty,
  isEmpty,
  areEmpty
};
