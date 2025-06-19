import React from 'react'
import { Box, AppBar, Typography,Toolbar,Button } from '@mui/material'
const Header = () => {
  return (
    <div>
      <Box>
        <AppBar position="static">
            <Toolbar variant='dense'>
                <Typography>GooGle</Typography>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
