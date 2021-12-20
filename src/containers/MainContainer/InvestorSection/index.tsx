import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { CardInvestor } from '@components/CardInvestor'

interface IProps {}

export const InvestorSection: React.FC<IProps> = () => {
  const isMobileWidth = useMediaQuery('(max-width:1200px)') // слушатель ширина окна

  return (
    <Box
      flexGrow={1}
      sx={{
        mt: '70px',
        display: 'grid',
        alignItems: 'end',
        textAlign: 'center',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: {
          xs: '1fr 40px 1fr',
          sm: '1fr 120px 1fr',
          md: '80px 1fr 80px'
        },
        gap: 1,
        gridTemplateAreas: {
          xs: `
            "card1 card1 card2 card2"
            "title title title title"
            "card3 card3 card4 card4"
          `,
          md: `
            ". card2 card3 ."
            "card1 card2 card3 card4"
            "card1 title title card4"
          `
        }
      }}
    >
      <Box sx={{ gridArea: 'card1' }}>
        <CardInvestor numberCard={0} />
      </Box>
      <Box sx={{ gridArea: 'card2' }}>
        <CardInvestor numberCard={1} />
      </Box>
      <Box sx={{ gridArea: 'card3' }}>
        <CardInvestor numberCard={2} />
      </Box>
      <Box sx={{ gridArea: 'card4' }}>
        <CardInvestor numberCard={3} />
      </Box>
      <Box sx={{ gridArea: 'title' }}>
        <Typography
          variant={isMobileWidth ? 'h3' : 'h1'}
          color='primary'
          sx={{
            textShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
            mb: { xs: '10px', sm: '30px', md: '0px' }
          }}
        >
          ИНВЕСТОРЫ
        </Typography>
      </Box>
    </Box>
  )
}
