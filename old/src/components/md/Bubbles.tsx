import React from 'react'
import styled from 'styled-components'

const BaseStyles = styled.div`
  display: block;
  background: black;
  width: 100%;
  min-height: 4em;
`

const QuestionMarkBubble = () => <BaseStyles></BaseStyles>

const ExclamationMarkBubble = () => <BaseStyles></BaseStyles>

const DoubleExclamationMarkBubble = () => <BaseStyles></BaseStyles>

export default {
  QuestionMarkBubble,
  ExclamationMarkBubble,
  DoubleExclamationMarkBubble,
}
