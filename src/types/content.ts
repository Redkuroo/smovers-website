export type BlogPost = {
  title: string;
  excerpt: string;
  date: string; // ISO date
  image?: string;
   video?: string;
  link: string; // external or internal URL
};

export type ServiceMode = {
  label: string;
  pill?: string;
  desc?: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  modes?: ServiceMode[];
};
