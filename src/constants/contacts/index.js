import { dimensions } from 'src/styles';
const { rem } = dimensions;
import { icons } from 'src/constants/icons';

export const contactsBeforeFeeze = [
  { name: 'Magdalena', number: '+385957487243' },
  { name: 'Tanja', number: '+385915982255' },
  { name: 'Morana', number: '+385989907371' },
  { name: 'Petra', number: '+385997210766' },
  { name: 'Damjan', number: '+385917939819' },
  { name: 'Robert', number: '+385958771155' },
  { name: 'Mihajlo', number: '+385981887602' },
  { name: 'Sunčana', number: '+385996404535' },
  { name: 'Lana', number: '+385955126115' },
  { name: 'Anja', number: '+385959141933' },
  { name: 'Jurica', number: '+385958653210' },
  { name: 'Valentina', number: '+385997514198' },
  { name: 'Josip', number: '+385989230290' },
  { name: 'Renata', number: '+385918998681' },
  { name: 'Ivana', number: '+385981889474' },
  { name: 'Elizabeta', number: '+385951986369' }
];

const freezedObjectArray = contactsBeforeFeeze.map(o => Object.freeze(o));
export const contacts = Object.freeze(freezedObjectArray);

export const contactButtons = [
  {
    buttonId: 1,
    func: 'call',
    iconProps: { name: icons.CALL, color: '#3366ff', size: 40 * rem }
  },
  {
    buttonId: 2,
    func: 'message',
    iconProps: { name: icons.CHATBOXES, color: '#3366ff', size: 40 * rem }
  }
];
