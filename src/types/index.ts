export interface Lesson {
  introduction: string[];
  practicalKnowledge: string[];
  mostImportantTags: Tags[];
  advices: string[];
  recap: string[];
}

export interface Tags {
  [key: string]: string;
}
