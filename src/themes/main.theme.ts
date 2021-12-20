import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#EEE4FF'
      },
      secondary: {
        main: '#8561c5'
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: '#9575cd'
      },
      background: {
        paper: '#171d2a',
        default: '#101724'
      }
    },
    typography: {
      fontFamily: ['Gotham Pro', 'sans-serif'].join(','),
      fontSize: 14
    },
    components: {
      MuiTypography: {
        defaultProps: {
          color: '#fff'
        },
        styleOverrides: {
          h1: {
            fontSize: '56px',
            lineHeight: '70px',
            fontWeight: 'bold'
          },
          h3: {
            fontSize: '35px',
            lineHeight: '46px',
            fontWeight: 'bold'
          },
          h4: {
            fontSize: '25px',
            lineHeight: '36px',
            fontWeight: 'bold'
          },
          h5: {
            fontSize: '21px',
            lineHeight: '32px'
          },
          body1: {
            fontSize: '24px',
            lineHeight: '32px'
          },
          body2: {
            fontSize: '21px',
            lineHeight: '32px'
          },
          subtitle1: {
            fontSize: '20px',
            lineHeight: '30px'
          },
          subtitle2: {
            fontSize: '14px',
            lineHeight: '26px'
          }
        }
      },
      MuiTooltip: {
        defaultProps: {
          enterTouchDelay: 100
        }
      },
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            boxShadow: '0px 0px 10px 1px rgba(149, 115, 210, 0.7)'
          },
          outlinedPrimary: {
            backgroundColor: '#162537'
          },
          outlinedSecondary: {
            backgroundColor: '#162537'
          },
          sizeLarge: {
            height: '50px'
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            border: '1px solid #C49BFF',
            borderRadius: '3px',
            color: '#c49bff',
            backgroundColor: '#162537'
          }
        }
      }
    }
  })
)

export default theme
