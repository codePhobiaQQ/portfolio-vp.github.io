import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';

const Text = () => (
  <>
    В настоящее время работаю{' '}
    <span className="font-bold text-gray-800">fullstack разработчиком</span>.{' '} 
    <br></br>
    I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://tailwindcss.com"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      TailwindCSS
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    . I'm also an active student in University of AMIKOM Yogyakarta.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
