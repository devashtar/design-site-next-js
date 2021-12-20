import React from 'react'
import Image from 'next/image'
import ImageWaveHeader from '@assets/backgrounds/wave-header.svg'
import Box from '@mui/material/Box'
import ImageHeader1 from '@assets/backgrounds/bg-image1.png'
import ImageHeader2 from '@assets/backgrounds/bg-image2.png'
import ImageHeader3 from '@assets/backgrounds/bg-image3.png'

interface IProps {
  sliderSerialNum: number
}

export const BackgroundLayoutHeader: React.FC<IProps> = ({
  sliderSerialNum
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          ...maxSizes[sliderSerialNum],
          width: { xs: '120%', md: '100%' },
          height: '100%',
          right: { xs: '-20px', md: '20px' },
          top: { xs: '470px', sm: '360px', md: '22px' }
        }}
      >
        <Image {...arrayImages[sliderSerialNum]} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '2357px',
          height: '491px',
          left: { xs: 'calc(50% - 1178px)', md: '-158px' },
          top: { xs: '450px', md: '403px' }
        }}
      >
        <Image src={ImageWaveHeader} alt='picture of the mono wave' />
      </Box>
    </Box>
  )
}

//  фиксируем ширину изображения. arrayImages и sizes взаимосвязанны
const maxSizes = [
  {
    maxWidth: '987px',
    maxHeight: '658px'
  },
  {
    maxWidth: '1166px',
    maxHeight: '777px'
  },
  {
    maxWidth: '1485px',
    maxHeight: '695px'
  }
]

const arrayImages = [
  {
    alt: 'description',
    src: ImageHeader1
  },
  {
    alt: 'description',
    src: ImageHeader2
  },
  {
    alt: 'description',
    src: ImageHeader3
  }
]
