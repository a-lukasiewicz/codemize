export interface Lesson {
  introduction?: string[] | null;
  practicalKnowledge?: string[] | null;
  mostImportantTags?: MostImportantTagsEntity[] | null;
  advices?: string[] | null;
  recap?: string[] | null;
  usefulLinks?: string[] | null;
}
export interface MostImportantTagsEntity {
  '<html>'?: string | null;
  '<head>'?: string | null;
  '<body>'?: string | null;
  heading?: string | null;
  paragraph?: string | null;
  'anchor tag'?: string | null;
  'unordered list'?: string | null;
  'ordered list'?: string | null;
  'list item'?: string | null;
  image?: string | null;
}

export interface Tags {
  [key: string]: string;
}

export interface Review {
  author: string;
  description: string;
  title: string;
}
