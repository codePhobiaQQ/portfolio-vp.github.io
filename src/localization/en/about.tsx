import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import nextIcon from '@iconify/icons-logos/nextjs';
import nestIcon from '@iconify/icons-logos/nestjs';

const Text = () => (
  <>
    В настоящее время занимаюсь{' '}
    <span className="font-bold text-gray-800">fullstack разработкой</span>.{' '} 
    <br></br>
    При разработке использую такие технологии как 
    <HighlightedTextIcon
      as="a"
      href="https://nest.com"
      className="mx-2"
      icon={<Icon icon={nestIcon} />}
    >
      NestJs
    </HighlightedTextIcon>{' '}
    и{' '}
    <HighlightedTextIcon
      as="a"
      href="https://nextjs.org"
      className="mx-2"
      icon={<Icon icon={nextIcon} />}
    >
      NextJs
    </HighlightedTextIcon>
    .<br />
    Также активно учусь в университете на технической специальности.
    <br />
    
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
