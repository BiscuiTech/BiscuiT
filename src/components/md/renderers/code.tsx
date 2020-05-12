import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import GithubVSCodeTheme from './outputTheme';
import theme from 'prism-react-renderer/themes/dracula'

export default ({ children, className }) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <pre className={className} style={{ ...style, padding: '20px', fontSize: '14px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span
                  style={{
                    display: "inline-block", width: "2em", userSelect: 'none', opacity: 0.3,
                  }}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}