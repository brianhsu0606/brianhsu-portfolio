import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  name: IconDefinition;
  url: string;
  label: string;
}

export interface Skill {
  category: string;
  item: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  link: string;
  img: string;
}
