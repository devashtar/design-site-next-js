import React from 'react'
import Image from 'next/image'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PictureInvestor1 from '@assets/investors/investor-1.png'
import PictureInvestor2 from '@assets/investors/investor-2.png'
import PictureInvestor3 from '@assets/investors/investor-3.png'
import PictureInvestor4 from '@assets/investors/investor-4.png'
import ellipseType1 from '@assets/ellipses/ellipse-type1.svg'
import ellipseType2 from '@assets/ellipses/ellipse-type2.svg'
import transparentEllipse from '@assets/ellipses/ellipse-lines.svg'
import useMediaQuery from '@mui/material/useMediaQuery'

import { FillEllipseBlock } from '@components/FillEllipseBlock'

interface IProps {
  numberCard: number
}

export const CardInvestor: React.FC<IProps> = ({ numberCard }) => {
  const isMobileWidth = useMediaQuery('(max-width:600px)') // слушатель ширина окна

  return (
    <Box flexGrow={1}>
      <Box
        sx={{
          display: 'grid',
          alignItems: 'end',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: { xs: 0, sm: 2 },
          gridTemplateAreas: listCard[numberCard].caseGridArea
        }}
      >
        {listCard[numberCard].arrayEllipses.map(
          ({ ellipseURL, text, gridArea }, idx) => {
            return (
              <FillEllipseBlock
                key={idx}
                ellipseURL={ellipseURL}
                text={text}
                gridArea={gridArea}
              />
            )
          }
        )}
        <Box
          sx={{
            gridArea: 'desc',
            height: '185px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Box sx={{ position: 'absolute', width: '100%' }}>
            <Image src={transparentEllipse} alt='description' />
          </Box>
          <Typography
            variant='subtitle2'
            sx={{
              width: '100%',
              p: { xs: '0px 4px', sm: '0px 20px' },
              fontSize: { xs: '8px', md: '10px' },
              lineHeight: { xs: '20px', md: '26px' }
            }}
          >
            {listCard[numberCard].description}
          </Typography>
        </Box>
        <Box sx={{ gridArea: 'investor', mt: '-80px' }}>
          <Image src={listCard[numberCard].bg} alt='description' />
        </Box>
      </Box>
    </Box>
  )
}

const listCard = [
  {
    description:
      'Опять просит посмотреть таблицу результатов в Excel. Доходность 2000% и скрины с биржи.',
    bg: PictureInvestor1,
    arrayEllipses: [
      {
        ellipseURL: ellipseType2,
        text: 'ПРОВЕРЕННЫЕ РЕЗУЛЬТАТЫ',
        gridArea: 'ellipse1'
      },
      { ellipseURL: ellipseType1, text: 'ОТЧЕТЫ', gridArea: 'ellipse2' }
    ],
    caseGridArea: `
    "ellipse1 ellipse2"
    "desc desc"
    "investor investor"
    `
  },
  {
    description:
      'В отпуске обязательно нужно прочитать пару книг, изучить лучшие курсы по криптотрейдингу',
    bg: PictureInvestor2,
    arrayEllipses: [
      { ellipseURL: ellipseType1, text: 'АНАЛИТИКА', gridArea: 'ellipse1' }
    ],
    caseGridArea: `
    "ellipse1 ellipse1"
    "desc desc"
    "investor investor"
    `
  },
  {
    description:
      'А тому ли я доверил свои средства? Как проверить профессионализм трейдера?',
    bg: PictureInvestor3,
    arrayEllipses: [
      { ellipseURL: ellipseType1, text: 'РЕЙТИНГИ', gridArea: 'ellipse1' }
    ],
    caseGridArea: `
    "ellipse1 ellipse1"
    "desc desc"
    "investor investor"
    `
  },
  {
    description: 'О нет! Опять... пропал с моими деньгами!',
    bg: PictureInvestor4,
    arrayEllipses: [
      {
        ellipseURL: ellipseType2,
        text: 'ПОЛНЫЙ КОНТРОЛЬ',
        gridArea: 'ellipse2'
      }
    ],
    caseGridArea: `
    "ellipse2 ellipse2"
    "desc desc"
    "investor investor"
    `
  }
]
