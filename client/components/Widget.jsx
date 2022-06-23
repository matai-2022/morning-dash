import React from 'react'
import styled from 'styled-components'

function Widget (props) {
  return (
    <KanyeWidget>
      Hello
    </KanyeWidget>
  )
}

function GenericWidget(props) {
  return props.children
}

const KanyeWidget = styled(GenericWidget)`
background-color: green
`





export default Widget