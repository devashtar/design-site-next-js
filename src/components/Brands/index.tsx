import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ImageBrand1 from '@assets/brands/image-1.png'
import ImageSubBrand1 from '@assets/brands/image-1-1.png'
import ImageSubBrand2 from '@assets/brands/image-1-2.png'
import ImageBrand2 from '@assets/brands/image-2.png'
import ImageBrand3 from '@assets/brands/image-3.png'
import ImageBrand4 from '@assets/brands/image-4.png'
import ImageBrand5 from '@assets/brands/image-5.png'
import ImageBrand6 from '@assets/brands/image-6.png'

export const Brands: React.FC<{}> = () => {
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      spacing={2}
      columns={12}
    >
      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand1}
          alt='Picture of the brand'
          width={190}
          height={38}
        />
        <Box
          sx={{
            maxWidth: '190px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Image
            src={ImageSubBrand1}
            alt='Picture of the brand'
            width={81}
            height={21}
          />
          <Image
            src={ImageSubBrand2}
            alt='Picture of the brand'
            width={81}
            height={21}
          />
        </Box>
      </Grid>

      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand2}
          alt='Picture of the brand'
          width={141}
          height={52}
        />
      </Grid>

      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand3}
          alt='Picture of the brand'
          width={174}
          height={47}
        />
      </Grid>

      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand4}
          alt='Picture of the brand'
          width={136}
          height={49}
        />
      </Grid>

      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand5}
          alt='Picture of the brand'
          width={163}
          height={27}
        />
      </Grid>

      <Grid item xs={4} md={2}>
        <Image
          src={ImageBrand6}
          alt='Picture of the brand'
          width={141}
          height={60}
        />
      </Grid>
    </Grid>
  )
}
