import React from 'react'
import PageHeader, { SubHeader } from './styles/PageHeader';
import useTranslation from '../hooks/useTranslation';
import { Image, Transformation } from 'cloudinary-react';

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader>{t('header')}</PageHeader>
      <SubHeader>
        {t('subHeader')}
      </SubHeader>
      <section className="overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <Image publicId="biscui.tech/biscuitech-portrait.webp" cloudName="biscuitech" alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech" className="h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover">
                <Transformation width="400" quality="auto" crop="fit" />
              </Image>
            </div>

            <div className="relative lg:ml-10">
              <svg className="absolute bottom-0 right-0 rotate-180 transform  h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144">
                <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
              </svg>
              <blockquote>
                <div className="text-xl leading-9 font-medium text-gray-200">
                  <p>
                    {t('aboutMe')}
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <Image publicId="biscui.tech/biscuitech-portrait.webp" cloudName="biscuitech" alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech" className="h-12 w-12 rounded-full">
                        <Transformation width="400" quality="auto" crop="scale" />
                      </Image>
                    </div>

                    <div className="ml-4 lg:ml-0">
                      <div className="text-large leading-6 font-medium text-gray-200">Jean-Cédric Huet</div>
                      <div className="text-base leading-6 font-medium text-indigo-600">{t('position')}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About