import { NewSongsContainer } from '@context/newSongs';
import { MenuListContainer } from '@context/menuList';
import { createContainer } from 'unstated-next';

function root() {
  const newSongs = NewSongsContainer.useContainer()
  const menuList = MenuListContainer.useContainer()
  return {
    ...newSongs,
    ...menuList
  }
}

export const RootContainer = createContainer(root)