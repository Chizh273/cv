export type SvgIconProps = {
  size?: 'small' | 'medium' | 'large';
  alt?: string;
  title?: string;
  icon:
    | 'Angular'
    | 'AngularMaterial'
    | 'Behat'
    | 'Bootstrap'
    | 'CSS'
    | 'Docker'
    | 'DDEV'
    | 'Lando'
    | 'Drupal'
    | 'Envelope'
    | 'Git'
    | 'Github'
    | 'GraphQL'
    | 'Gulp'
    | 'JS'
    | 'MySQL'
    | 'NgRx'
    | 'NodeJS'
    | 'Acquia'
    | 'Pantheon'
    | 'PlatformSh'
    | 'PHP'
    | 'React'
    | 'Redux'
    | 'Solr'
    | 'SearchAPI'
    | 'SQL'
    | 'Telegram'
    | 'Webpack';
};

export type TextWithIconProps = {
  text: string;
  iconDefinition?: SvgIconProps;
  iconVerticalAlign?: 'baseline' | 'baseline-last' | 'center-safe' | 'end-safe' | 'center' | 'end';
};

export type CvHeaderProps = {
  name: string;
  position: string;
  contacts: Array<{
    label: TextWithIconProps;
    value: string;
  }>;
};

export type CvSummaryProps = {
  summary: string;
};

export type CvProjectsProps = {
  projects: Array<{
    title: string;
    period: string;
    position: string;
    tech: TextWithIconProps[];
    description: string;
    lists: Array<{
      title: string;
      description?: string;
      items: string[];
    }>;
  }>;
};

export type CvEducationProps = {
  education: Array<{
    degree: string;
    institution: string;
    specialization: string;
    period: string;
  }>;
};

export type CvTechnologiesProps = {
  technologies: Array<{
    tech: TextWithIconProps;
    score: number;
    description?: string;
  }>;
};

export type CvData = CvHeaderProps &
  CvSummaryProps &
  CvProjectsProps &
  CvEducationProps &
  CvTechnologiesProps;
