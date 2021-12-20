import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

interface IProps {
  anchorEl: null | HTMLElement
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

export const PopupMenu: React.FC<IProps> = ({ anchorEl, setAnchorEl }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 50,
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Link href='/' passHref>
          <Button color='primary'>Главная</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Link href='/' passHref>
          <Button color='primary'>Блог</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Link href='/' passHref>
          <Button color='primary'>PRO</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Link href='/' passHref>
          <Button color='primary'>Инвестору</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={() => setAnchorEl(null)}>
        <Link href='/' passHref>
          <Button color='primary'>Начать</Button>
        </Link>
      </MenuItem>
    </Menu>
  )
}
