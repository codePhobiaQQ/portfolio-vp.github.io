export default interface ContactSectionProps {
  title: string;
  content: ContactSectionContentProps;
}

export interface ContactSectionContentProps {
  email: string;
  socials: {
    telegram: string;
    vk: string;
    instagram: string;
  };
}
