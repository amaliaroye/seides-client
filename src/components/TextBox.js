// import React from 'react'
// import styled, { keyframes } from 'styled-components'

// const px = 3

// const textKeyframes = ({ char }) => keyframes`
//   from {
//     width: 0;
//   }
//   to {
//     width: ${char}ch;
//   }
// `

// const StyledText = styled.div`
//   animation-name: ${textKeyframes};
//   animation-duration:${props => (props.char) * 0.05}s;
//   animation-timing-function: steps(${props => props.char});
//   animation-iteration-count: 1;
//   animation-direction: normal;
//   animation-fill-mode: both;
//   white-space: nowrap;
//   overflow: hidden;
//   font-family: 'monobit', monospace;
//   font-size: calc(${px} * 16px);
//   text-transform: full-width;

//   // border: dotted 1px blue;

// `
// const Box = styled.div`
//   border: solid transparent;
//   border-width: calc(${px} * 8px);
//   border-image: url('./border-8x8.png') 8 fill;
//   width: calc(${px} * 256px);
//   margin: 5px;
//   grid-area: text;
// `

// const TextBox = ({ text }) => {
//   const char = parseFloat(text.length)
//   return (
//     <Box>
//       <StyledText char={char}>
//         {text}
//       </StyledText>
//     </Box>)
// }

// export default TextBox
