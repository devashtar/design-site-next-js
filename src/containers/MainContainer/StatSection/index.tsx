import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardStat } from '@components/CardStat'

interface IProps {}

export const StatSection: React.FC<IProps> = () => {
  return (
    <Box sx={{ mt: '90px' }}>
      <Typography variant='h3' align='center'>
        EQUITE В ЦИФРАХ
      </Typography>
      <Grid
        container
        direction='row'
        spacing={2}
        columns={4}
        sx={{ mt: '40px' }}
      >
        <Grid item xs={2} md={1}>
          <CardStat numberCard={0} />
        </Grid>
        <Grid item xs={2} md={1}>
          <CardStat numberCard={1} />
        </Grid>
        <Grid item xs={2} md={1}>
          <CardStat numberCard={2} />
        </Grid>
        <Grid item xs={2} md={1}>
          <CardStat numberCard={3} />
        </Grid>
      </Grid>
    </Box>
  )
}
