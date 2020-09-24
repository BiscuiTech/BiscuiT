import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)))
    return (index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const Code = ({
  children,
  className: hightlightClassName,
  metastring,
  ...props
}) => {
  const language = hightlightClassName.replace(/language-/, '')
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
      {...props}
    >
      {({
        className: preClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        tokens.pop() //This might reveal to be a bug later on.
        return (
          <div className="my-6">
            <pre
              className={preClassName}
              style={{
                ...style,
                padding: '4px 0px',
                fontSize: '14px',
                borderRadius: '4px',
                overflowX: 'auto',
              }}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line pl-2`
                } else {
                  lineProps.className = `${lineProps.className} border-l-2 border-transparent pl-2`
                }
                return (
                  <div key={i} {...lineProps}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '2em',
                        userSelect: 'none',
                        opacity: 0.3,
                      }}
                    >
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )
      }}
    </Highlight>
  )
}

export default Code