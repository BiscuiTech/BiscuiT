import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'
import styled from 'styled-components'

const LangWrapper = styled.div`
  margin: 12px 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat';
  justify-content: start;
  font-size: 14px;
  ul {
    padding: 0;
    margin: 0;
    li{
      list-style: none;

    }
  }
  ul>li:not(:last-child) {
    margin-bottom: 12px 0;
  }
  input[type=checkbox]{

  }
  input:checked + label {
    background: #bada55;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

const LangBtn = styled.div`
  transform: rotate(90deg);
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
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
      <LangBtn>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </LangBtn>
    </LangWrapper>
  )
}

export default LocaleSwitcher