export interface Repository {
  name: string;
  description: string;
  html_url: string; // ugly for now, will have to write an adapter for this later
}
