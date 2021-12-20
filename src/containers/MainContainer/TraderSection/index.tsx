import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ellipseType1 from '@assets/ellipses/ellipse-type1.svg'
import ellipseType2 from '@assets/ellipses/ellipse-type2.svg'
import TraderImage from '@assets/trader.png'
import { EllipseTrader } from '@components/EllipseTrader'

interface IProps {}

export const TraderSection: React.FC<IProps> = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        mt: '70px',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'end',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: '1fr 100px auto 100px 1fr'
        },
        gridTemplateRows: 'auto',
        gap: 1,
        gridTemplateAreas: {
          xs: `
        "title title"  
        "el1 el2"
        "el3 el4"
        "trader trader"
        "el5 el6"
        `,
          md: `
          ". el1 title el2 ."
          "el3 . trader . el4"
          ". el5 trader el6 ."
        `
        }
      }}
    >
      <Box sx={{ gridArea: 'title', textAlign: 'center', alignSelf: 'start' }}>
        <Typography variant='h3'>А ведь мог бы зарабатывать...</Typography>
      </Box>
      {arrayEllipses.map((item, idx) => {
        return <EllipseTrader key={idx} {...item} />
      })}
      <Box
        sx={{
          height: { xs: '300px', md: 'auto' },
          gridArea: 'trader',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Box sx={{ position: 'absolute', zIndex: 0 }}>
          <Image src={TraderImage} alt='description' />
        </Box>
        <Typography
          variant='h1'
          sx={{ zIndex: 100, textAlign: 'center', position: 'relative' }}
        >
          Трейдер
        </Typography>
      </Box>
    </Box>
  )
}

const arrayEllipses = [
  {
    index: 0,
    gridArea: 'el1',
    caseGridArea: `
      "ellipse1 ellipse2"
      "main main"
      "ellipse3 ."
    `,
    mainEllipseText: 'Как выделиться',
    mainEllipseSizes: {
      width: '174px',
      height: '130px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType1,
        text: 'РЕФЕРАЛЬНАЯ СИСТЕМА',
        gridArea: 'ellipse1'
      },
      {
        ellipseURL: ellipseType2,
        text: 'ИНТЕГРАЦИЯ',
        gridArea: 'ellipse2'
      },
      {
        ellipseURL: ellipseType2,
        text: 'БЛОГ',
        gridArea: 'ellipse3'
      }
    ]
  },
  {
    index: 1,
    gridArea: 'el2',
    caseGridArea: `
      "ellipse1 ellipse1"
      "main main"
      ". ."
    `,
    mainEllipseText: 'Как убедить инвестора, что я не СКАМ?',
    mainEllipseSizes: {
      width: '216px',
      height: '186px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType1,
        text: 'ПОРТФОЛИО',
        gridArea: 'ellipse1'
      }
    ]
  },
  {
    index: 2,
    gridArea: 'el3',
    caseGridArea: `
      "ellipse1 ."
      "main main"
      "ellipse2 ."
    `,
    mainEllipseText: 'Где найти инвестора',
    mainEllipseSizes: {
      width: '170px',
      height: '150px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType2,
        text: 'ГЕЙМИФИКАЦИЯ',
        gridArea: 'ellipse1'
      },
      {
        ellipseURL: ellipseType1,
        text: 'МАРКЕТИНГОВАЯ ПЛАТФОРМА',
        gridArea: 'ellipse2'
      }
    ]
  },
  {
    index: 3,
    gridArea: 'el4',
    caseGridArea: `
      ". ellipse1"
      "main main"
      ". ."
    `,
    mainEllipseText:
      'Обязательно успеть составить и разослать отчет инвесторам 31 декабря в 18:00!',
    mainEllipseSizes: {
      width: '256px',
      height: '204px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType1,
        text: 'СЛУЖБА ОТЧЕТНОСТИ',
        gridArea: 'ellipse1'
      }
    ]
  },
  {
    index: 4,
    gridArea: 'el5',
    caseGridArea: `
      ". ."
      "main main"
      "ellipse1 ."
    `,
    mainEllipseText: 'Слил средства... пора переезжать в другой город!',
    mainEllipseSizes: {
      width: '230px',
      height: '176px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType1,
        text: 'БЕЗОПАСНОСТЬ',
        gridArea: 'ellipse1'
      }
    ]
  },

  {
    index: 5,
    gridArea: 'el6',
    caseGridArea: `
      ". ellipse1"
      "main main"
      ". ellipse2"
    `,
    mainEllipseText:
      'Как все успеть? На сегодня назначено 5 встреч с инвесторами, не прочитанных сообщений: 51',
    mainEllipseSizes: {
      width: '304px',
      height: '202px'
    },
    arrayFillEllipses: [
      {
        ellipseURL: ellipseType1,
        text: 'ВСЕ В ОДНОМ МЕСТЕ',
        gridArea: 'ellipse1'
      },
      {
        ellipseURL: ellipseType2,
        text: 'УПРАВЛЕНИЕ',
        gridArea: 'ellipse2'
      }
    ]
  }
]
