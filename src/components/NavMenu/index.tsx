import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import ImageLogo from '@assets/icons/logo.png'

import useMediaQuery from '@mui/material/useMediaQuery'
import { PopupMenu } from '@components/PopupMenu'

export const NavMenu: React.FC<{}> = () => {
  const isDesktopWidth = useMediaQuery('(min-width:1200px)') // слушатель ширина окна
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  // позволяет отображать PopupMenu под элементом, на который кликнули
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // мобильная версия nav menu
  const mobileNavMenu = (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ display: 'flex' }}
    >
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ height: '56px', position: 'relative' }}>
            <Image
              src={ImageLogo}
              alt='Picture of the logo'
              width={48}
              height={56}
            />
          </Box>
          <Typography
            variant='overline'
            sx={{ ml: '20px', fontSize: '20px', color: '#fff' }}
          >
            EQUITE.IO
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Button
          variant='outlined'
          color='secondary'
          sx={{
            border: 0,
            minWidth: '0px',
            height: '42px',
            width: '40px'
          }}
        >
          RU
        </Button>
        <IconButton
          onClick={handleMenu}
          color='secondary'
          aria-label='menu'
          sx={{ ml: '20px', height: '40px', width: '40px' }}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
      <PopupMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Grid>
  )

  // пк версия nav menu
  const desktopNavMenu = (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      sx={{ display: 'flex' }}
    >
      <Grid container item xs='auto' spacing='60px' alignItems='center'>
        <Grid item>
          <Image
            src={ImageLogo}
            alt='Picture of the logo'
            width={48}
            height={56}
          />
        </Grid>

        <Grid item>
          <Link href='/' passHref>
            <Button color='primary'>Главная</Button>
          </Link>
        </Grid>

        <Grid item>
          <Link href='/' passHref>
            <Button color='primary'>Блог</Button>
          </Link>
        </Grid>

        <Grid item>
          <Link href='/' passHref>
            <Button color='primary'>PRO</Button>
          </Link>
        </Grid>

        <Grid item sx={{ ml: -5 }}>
          <Link href='/' passHref>
            <Button variant='outlined' color='primary'>
              ИНВЕСТОРУ
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs='auto'
        spacing='20px'
        alignItems='center'
        justifyContent='flex-end'
      >
        <Grid item>
          <Button
            variant='outlined'
            color='secondary'
            sx={{
              border: 0,
              minWidth: '0px',
              width: '40px'
            }}
          >
            RU
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' color='secondary'>
            ВОЙТИ
          </Button>
        </Grid>
        <Grid item>
          <Button color='secondary' variant='contained'>
            НАЧАТЬ
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <Box sx={{ height: '56px' }}>
      {isDesktopWidth ? desktopNavMenu : mobileNavMenu}
    </Box>
  )
}
