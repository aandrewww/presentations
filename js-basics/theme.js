import React from 'react'

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      SCORUM
    </div>
  </div>
)

export default {
  Provider,
  h1: {
    textTransform: 'uppercase',
    fontSize: '1.5em',
    letterSpacing: '0.06em',
  },
  h2: {
    fontSize: '1.2em',
  },
  blockquote: {
    fontStyle: 'italic',
  },
  li: {
    fontSize: '0.9em',
  },
  p: {
    fontSize: '0.9em',
  }
}
