import React from 'react';
import { Icon } from '@iconify/react';
import phpIcon from '@iconify/icons-logos/php';
import javascriptIcon from '@iconify/icons-logos/javascript';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    Около двух лет я совершенствовал своих навыков{' '}
    <span className="font-bold text-gray-800">в разработке веб-приложений</span> с использованием{' '}
    <HighlightedTextIcon
      as="a"
      href="https://php.net"
      className="mx-2"
      icon={<Icon icon={phpIcon} />}
    >
      PHP
    </HighlightedTextIcon>{' '}
    и{' '}
    <HighlightedTextIcon className="mx-2" icon={<Icon icon={javascriptIcon} />}>
      Javascript
    </HighlightedTextIcon>{' '}
    сейчас же я создаю приложений с использованием следующих инструментов:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
