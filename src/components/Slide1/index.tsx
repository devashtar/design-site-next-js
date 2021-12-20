import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import useMediaQuery from '@mui/material/useMediaQuery'

export const Slide1: React.FC<{}> = () => {
  const isMobileWidth = useMediaQuery('(max-width:800px)') // слушатель ширина окна

  return (
    <Box
      sx={{
        width: { xs: '100%', lg: '680px' },
        mt: { xs: '50px', md: '100px' },
        pb: { xs: '230px', sm: '370px', md: '120px' }
      }}
    >
      <Typography
        variant={isMobileWidth ? 'h4' : 'h3'}
        align={isMobileWidth ? 'center' : 'left'}
      >
        Проверенный результат
      </Typography>
      <Typography
        variant={isMobileWidth ? 'subtitle1' : 'h5'}
        color='secondary'
        align={isMobileWidth ? 'center' : 'left'}
        sx={{ mt: { sx: '10px', md: '16px' } }}
      >
        КРИПТОТРЕЙДЕРА ЗА 30 СЕКУНД
      </Typography>
      <Typography
        variant={isMobileWidth ? 'subtitle2' : 'subtitle1'}
        align={isMobileWidth ? 'center' : 'left'}
        sx={{
          mt: { sx: '16px', md: '40px' },
          width: { sx: '100%px', md: '80%' }
        }}
      >
        Прозрачная, социально инвестицонная платформа подтвержденных результатов
        трейдеров и инструментов доверительного управления средствами для
        инвесторов
      </Typography>
      <Grid
        container
        justifyContent={isMobileWidth ? 'center' : 'flex-start'}
        spacing={3}
        columns={3}
        sx={{ mt: { xs: '20px', md: '40px' } }}
      >
        <Grid item>
          <Button size='large' variant='contained' color='secondary'>
            НАЧАТЬ
          </Button>
        </Grid>

        <Grid item>
          <Button
            size='large'
            variant='outlined'
            color='secondary'
            sx={{ boxShadow: '0px 0px 10px 1px rgba(149, 115, 210, 0.4)' }}
          >
            Я ТРЕЙДЕР
          </Button>
        </Grid>

        <Grid item>
          <Button
            size='large'
            variant='outlined'
            color='primary'
            sx={{ boxShadow: '0px 0px 10px 1px rgba(255, 255, 255, 0.4)' }}
          >
            Я ИНВЕСТОР
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
