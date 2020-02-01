import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'
import styled from 'styled-components'

const LangWrapper = styled.div`
  margin: 12px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}
input:checked + label {
	background: #bada55;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}
`;

const LangBtn = styled.button`
  border: none;
  background: none;
  text-decoration: ${props => props.current ? 'underline' : 'none'};
  cursor: pointer;
  font-size: 24px;
  font-weight: ${props => props.current ? 600 : 200};
  font-family: ${props => props.theme.menu.font};
  color: black;
`;

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale: { lang } } = React.useContext(LocaleContext)
  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return (
    <LangWrapper>
      <ul>
        <li>Français</li>
        <li>English</li>
      </ul>
      <input type="checkbox" />
      {locales.map(locale => (
        <LangBtn key={locale} value={locale} current={locale === lang} onClick={handleLocaleChange}>
          {languageNames[locale]}
        </LangBtn>
      ))}
    </LangWrapper>
  )
}

export default LocaleSwitcher