import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Icon1 from '@assets/icons/icon1.svg'
import Icon2 from '@assets/icons/icon1.svg'
import Icon3 from '@assets/icons/icon2.svg'
import Icon4 from '@assets/icons/icon3.svg'
import useMediaQuery from '@mui/material/useMediaQuery'

interface IProps {
  numberCard: number
}

export const CardStat: React.FC<IProps> = ({ numberCard }) => {
  const isMobileWidth = useMediaQuery('(max-width:600px)') // слушатель ширина окна

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box>
        <Image {...listCard[numberCard].imageProps} />
      </Box>
      <Typography
        variant={isMobileWidth ? 'h4' : 'h3'}
        color='primary'
        sx={{ textShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)' }}
      >
        {listCard[numberCard].title}
      </Typography>
      <Typography
        variant={isMobileWidth ? 'subtitle2' : 'subtitle1'}
        color='secondary'
        sx={{ mt: '10px' }}
      >
        {listCard[numberCard].subtitle}
      </Typography>
      <Typography
        color='primary'
        sx={{
          mt: '10px',
          fontSize: { xs: '14px', sm: '20px' },
          lineHeight: { xs: '20px', md: '30px' }
        }}
      >
        {listCard[numberCard].desc}
      </Typography>
    </Box>
  )
}

const listCard = [
  {
    title: '5000+',
    subtitle: 'ПОЛЬЗОВАТЕЛЕЙ',
    desc: 'Зарегистрировалось на Equite.io с момента запуска сервиса',
    imageProps: {
      src: Icon1,
      alt: 'description'
    }
  },
  {
    title: '$800 M',
    subtitle: 'КАПИТАЛ',
    desc: 'Именно такая сумма находится под управлением у наших пользователей',
    imageProps: {
      src: Icon2,
      alt: 'description'
    }
  },
  {
    title: '$3 млрд',
    subtitle: 'ОБОРОТ',
    desc: 'Общая сумма сделок, совершаемая нашими пользователями за месяц',
    imageProps: {
      src: Icon3,
      alt: 'description'
    }
  },
  {
    title: '38',
    subtitle: 'СТРАН',
    desc: 'Нам доверяют трейдеры и инвесторы по всему миру',
    imageProps: {
      src: Icon4,
      alt: 'description'
    }
  }
]
