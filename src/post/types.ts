export interface PostData {
  title: string;
  imageUrl: string;
  content: string;
  author: string;
  alternativeText: string;
}

export interface Post extends PostData {
  id: string;
  date: Date;
}
