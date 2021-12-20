import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IEllipseProps {
  ellipseURL: string
  text: string
  gridArea: string
}

export const FillEllipseBlock: React.FC<IEllipseProps> = ({
  ellipseURL,
  text,
  gridArea
}) => {
  return (
    <Box
      sx={{
        gridArea: gridArea,
        position: 'relative',
        mb: '-30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1
      }}
    >
      <Box sx={{ position: 'absolute', width: '110%' }}>
        <Image src={ellipseURL} alt='description' />
      </Box>
      <Typography
        variant='subtitle2'
        sx={{ zIndex: 1, fontSize: { xs: '9px', md: '10px' } }}
      >
        {text}
      </Typography>
    </Box>
  )
}
