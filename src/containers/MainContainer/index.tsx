import React from 'react'
import Box from '@mui/material/Box'

import { StatSection } from './StatSection'
import { InvestorSection } from './InvestorSection'
import { TraderSection } from './TraderSection'

export const MainContainer: React.FC<{}> = () => {
  return (
    <Box>
      <StatSection />
      <InvestorSection />
      <TraderSection />
    </Box>
  )
}
