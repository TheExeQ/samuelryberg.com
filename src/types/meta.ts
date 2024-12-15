export interface Meta {
  title: string;
  author: string;
  email: string;
  description: string;
  keywords: Array<string>;
  accounts: {
    github: {
      username: string;
      repo: string;
    };
    linkedin: {
      username: string;
    };
    discord: {
      username: string;
    };
    instagram: {
      username: string;
    };
  };
}
