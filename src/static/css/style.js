const center_text = {
  textAlign: 'center',
}

// .css-1elwnq4-MuiPaper-root-MuiAccordion-root
const accordionStyle = {
  backgroundColor: 'rgb(255, 255, 255,0.5)',
  boxShadow: '2px 3.25px rgba(0,0,0,0.2)',
  borderRadius: '0.5rem',
  margin: '1rem 0',
}

const logoStyles = {
  objectFit: 'contain',
}

const TypographyStyles = {
  fontFamily: "'Playfair Display', serif",
}

const headingStyles = {
  ...TypographyStyles,
  width:'100%',
  textAlign: 'center', 
  paddingBottom:'2rem',
}

const socialsStyles = {
  position: 'absolute',
  right: '0',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  opacity: '0.8',
}

const problemHeadingStyles = { 
  fontWeight:'bold',
  fontSize:'0.9remrem',
}

const problemSubStyles = {
  fontWeight:'100',
}

const guidelineHeadingStyles = {
  fontWeight:'500',
}

const guidelineSubStyles = {
  padding: '0.5rem 0',
}

const guidelineStyles = {
    fontWeight:'100',
  lineHeight: '2rem',
  // letterSpacing:'0.05rem'
}

const homepageCardStyling = {
  // backgroundColor: 'rgb(255, 255, 255,0.5)',
  boxShadow: '0 0 0 0',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.39) 0%, rgba(255, 255, 255, 0.39) 20.58%, rgba(255, 255, 255, 0.3315) 38.8%, rgba(255, 255, 255, 0.3159) 47.14%, rgba(255, 255, 255, 0.3159) 89.07%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '0.5rem',
  margin: '0 0 1rem 0',
  padding: '1rem 1rem 2.5rem 1rem',
}

const styledAnchor = {
            textDecoration: 'none',
            margin: 0,
            width: '20%',
            color: 'inherit',
            '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            },
            '&:focus': {
            textDecoration: 'none',
            color: 'inherit',
            },
            '&:active': {
            textDecoration: 'none',
            color: 'inherit',
            },
}


// const def = {
//   center_text,
//   accordionStyle,
//   logoStyles,
//   TypographyStyles,
//   headingStyles,
//   socialsStyles,
//   problemHeadingStyles,
//   problemSubStyles,
//   guidelineHeadingStyles,
//   guidelineSubStyles,
//   guidelineStyles,
//   homepageCardStyling
// }

// export default def;

export {
  center_text,
  accordionStyle,
  logoStyles,
  TypographyStyles,
  headingStyles,
  socialsStyles,
  problemHeadingStyles,
  problemSubStyles,
  guidelineHeadingStyles,
  guidelineSubStyles,
  guidelineStyles,
  homepageCardStyling,
  styledAnchor
}