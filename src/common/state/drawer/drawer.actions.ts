export enum DrawerActionTypes {
  OPEN_DRAWER = '@@general/OPEN_DRAWER',
  CLOSE_DRAWER = '@@general/CLOSE_DRAWER'
}

export const OpenDrawerAction = (): DrawerAction => ({
  type: DrawerActionTypes.OPEN_DRAWER
});

export const CloseDrawerAction = (): DrawerAction => ({
  type: DrawerActionTypes.CLOSE_DRAWER
});

export type DrawerAction =
  | { type: DrawerActionTypes.OPEN_DRAWER }
  | { type: DrawerActionTypes.CLOSE_DRAWER };
