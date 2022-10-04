export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type animais = Array<Animal>;
