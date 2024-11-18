export interface PostData {
  title: string;
  imageUrl: string;
  content: string;
  author: string;
}

export interface Post extends PostData {
  id: string;
  date: string;
}
