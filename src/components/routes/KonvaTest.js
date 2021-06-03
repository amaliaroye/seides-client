import React from 'react'
import {
  Stage,
  Layer
} from 'react-konva'
// import Konva from 'konva'

const KonvaTest = props => {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
      </Layer>
    </Stage>
  )
}

export default KonvaTest
