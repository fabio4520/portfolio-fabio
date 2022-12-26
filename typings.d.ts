interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  adress: string;
  author: string;
  backgroundInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  phrase: string;
  profilePic: Image;
  role: string;
  socials: Social[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody{
  _type: "project";
  title: string;
  image: Image;
  linkToSourceCode: string;
  linkToWebsite: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody{
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  iscurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}