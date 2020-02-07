import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslation'
import PageHeader, { SubHeader } from './styles/PageHeader'
import ContactButton from './ContactButton'

const Contact = () => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <PageHeader>Get in touch</PageHeader>
      <SubHeader>
        Your needs are unique.
        <br />
        <b>Let's get in touch</b>
      </SubHeader>
      <div className="my-12">
        <ContactButton >Contact me</ContactButton>
      </div>
    </>
  )
}

export default Contact