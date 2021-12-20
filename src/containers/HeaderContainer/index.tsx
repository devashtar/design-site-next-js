import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Box from '@mui/material/Box'
import { BackgroundLayoutHeader } from '@components/BackgroundLayoutHeader'
import { NavMenu } from '@components/NavMenu'
import { Slide1 } from '@components/Slide1'
import { Slide2 } from '@components/Slide2'
import { Slide3 } from '@components/Slide3'
import { RadioButtons } from '@components/RadioButtons'
import { Brands } from '@components/Brands'

interface IProps {
  sliderSerialNum: number
  setSliderSerialNum: React.Dispatch<React.SetStateAction<number>>
}

export const HeaderContainer: React.FC<IProps> = ({
  sliderSerialNum,
  setSliderSerialNum
}) => {
  const onChangeIndex = (index: number) => {
    setSliderSerialNum(index)
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        height: { xs: 'calc(100vh + 280px)', sm: '100vh' },
        position: 'relative',
        pb: '60px'
      }}
    >
      <BackgroundLayoutHeader sliderSerialNum={sliderSerialNum} />
      <NavMenu />
      <Box flexGrow={1} sx={{ minHeight: '570px' }}>
        {
          <SwipeableViews
            index={sliderSerialNum}
            onChangeIndex={onChangeIndex}
            enableMouseEvents
          >
            <div>
              <Slide1 />
            </div>
            <div>
              <Slide2 />
            </div>
            <div>
              <Slide3 />
            </div>
          </SwipeableViews>
        }
      </Box>
      <Box
        flexGrow={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '0px',
          pb: { xs: '40px', md: '50px' }
        }}
      >
        <RadioButtons
          sliderSerialNum={sliderSerialNum}
          setSliderSerialNum={setSliderSerialNum}
        />
      </Box>
      {sliderSerialNum !== 1 && <Brands />}
    </Box>
  )
}
