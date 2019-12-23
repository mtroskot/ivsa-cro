import { screenNames } from 'src/constants/navigation';
import { icons } from 'src/constants/icons';

export const menuList = [
  {
    menuId: screenNames.NEWS,
    iconProps: { name: icons.CLIPBOARD, rightSide: true, color: '#fff' },
    text: 'newsBoard'
  },
  {
    menuId: screenNames.CONGRESS,
    iconProps: { name: icons.INFORMATION, rightSide: true, color: '#ffff40' },
    text: 'congressProgram'
  },
  {
    menuId: screenNames.MAP,
    iconProps: { name: icons.MAP, rightSide: true, color: '#ffff40' },
    text: 'map'
  },
  {
    menuId: screenNames.TRIP_MENU,
    iconProps: { name: icons.BOOK, rightSide: true, color: '#40ff60' },
    text: 'tripDescription'
  },
  {
    menuId: screenNames.FLOOR_PLAN,
    iconProps: { name: icons.GRID, rightSide: true, color: '#8340ff' },
    text: 'floorPlan'
  },
  {
    menuId: screenNames.CONTACTS,
    iconProps: { name: icons.CONTACT, rightSide: true, color: '#8340ff' },
    text: 'contacts'
  },
  {
    menuId: 'booklet',
    iconProps: { name: icons.DOCUMENT, rightSide: true, color: '#d95f80' },
    text: 'booklet'
  }
];
