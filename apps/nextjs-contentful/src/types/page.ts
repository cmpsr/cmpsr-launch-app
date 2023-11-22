import { Model } from '@cmpsr/cml';
import { Theme } from '@cmpsr/components';

export type PageMeta = {
  propertyName: string;
  propertyValue: string;
  content: string;
};

export type PageMetaData = {
  [id: string]: PageMeta;
};

export type PageProps = {
  title: string;
  content: Model[];
  metaConfiguration: PageMetaData | null;
  theme: Partial<Theme>;
};
