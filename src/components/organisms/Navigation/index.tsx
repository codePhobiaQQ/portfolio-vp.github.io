import Animated from 'components/animations';
import { MainMenu } from 'components/molecules';
import { LocaleProps } from 'contexts/language';
import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { Container } from 'components/atoms';

interface Props {
  locale: LocaleProps;
  sections: { about: string; projects: string; blogs: string; skills: string; contact: string };
  className?: string;
}

export default function Navigation({ sections, className }: Props) {
  const [animationFinish, setAnimationFinish] = useState(false);

  return (
    <nav>
      <Animated.FromDirection
        from="top"
        className={classNames('w-full', className)}
        duration={1}
        onAnimationComplete={() => setAnimationFinish(true)}
      >
        <Container className="flex">
          {/* <div className="flex self-center flex-1 pr-8">
            <div className="sm:ml-auto">
              <TextSelect
                state={[selectedLanguage, setSelectedLanguage]}
                options={languageOptions}
              />
            </div>
          </div> */}
          <MainMenu sections={sections} animationFinish={animationFinish} />
        </Container>
      </Animated.FromDirection>
    </nav>
  );
}
