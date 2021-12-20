import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import transparentEllipse from '@assets/ellipses/ellipse-lines.svg'

type FillEllipseType = {
  ellipseURL: string
  text: string
  gridArea: string
}

interface IEllipseProps {
  index: number
  arrayFillEllipses: Array<FillEllipseType>
  gridArea: string
  caseGridArea: string
  mainEllipseText: string
  mainEllipseSizes: {
    height: string
    width: string
  }
}

export const EllipseTrader: React.FC<IEllipseProps> = ({
  index,
  arrayFillEllipses,
  mainEllipseText,
  gridArea,
  caseGridArea,
  mainEllipseSizes
}) => {
  return (
    <Box
      sx={{
        gridArea: gridArea,
        justifySelf: { xs: 'center', md: index % 2 ? 'start' : 'end' }
      }}
    >
      <Box
        sx={{
          width: { xs: 'auto', md: mainEllipseSizes.width },
          position: 'relative',
          display: 'grid',
          justifyItems: 'center',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
          gap: 0,
          gridTemplateAreas: caseGridArea
        }}
      >
        {arrayFillEllipses.map((item, idx) => {
          return <FillEllipseBlock key={idx} {...item} />
        })}
        <Box
          sx={{
            p: { sx: '0px 4px', md: '0px 14px' },
            gridArea: 'main',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', md: mainEllipseSizes.width },
            height: { xs: '100%', md: mainEllipseSizes.height }
          }}
        >
          <Box sx={{ position: 'absolute' }}>
            <Image src={transparentEllipse} alt='description' />
          </Box>
          <Typography
            variant='subtitle2'
            sx={{
              zIndex: 1,
              lineHeight: { xs: '16px', md: '22px' },
              fontSize: { xs: '9px', md: '10px' },
              textAlign: 'center'
            }}
          >
            {mainEllipseText}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const FillEllipseBlock: React.FC<FillEllipseType> = ({
  ellipseURL,
  text,
  gridArea
}) => {
  return (
    <Box
      sx={{
        p: { xs: '0px 7px', md: '0px 20px' },
        gridArea: gridArea,
        height: { xs: '100px', md: '1px' },
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1
      }}
    >
      <Box sx={{ position: 'absolute', width: { xs: '120%', md: '120%' } }}>
        <Image src={ellipseURL} alt='description' />
      </Box>
      <Typography
        variant='subtitle2'
        sx={{
          zIndex: 1,
          fontSize: { xs: '9px', md: '10px' },
          textAlign: 'center'
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}
