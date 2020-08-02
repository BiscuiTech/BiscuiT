import React from 'react'
import { render, fireEvent } from '../testUtils'
import Home from '../../src/pages/[lang]/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Home
        localization={{ locale: 'en', namespace: 'home', translations: {} }}
        posts={[]}
        preview={false}
      />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })

  /* it('clicking button redirects to page', () => {
    const { getByText } = render(
      <Home
        localization={{ locale: 'en', namespace: 'home', translations: {} }}
        posts={[]}
        preview={false}
      />,
      {}
    )
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  }) */
})
