export interface IAuthor {
    _id: string;
    username: string;
    avatar: string;
}

export interface ICommentItem {
    _id: string
}

export interface IPostItem {
    _id: string,
    content: string,
    author: IAuthor,
    avatar: string,
    media: string[],
    type: "video" | "image" | "",
    comments: ICommentItem[],
    likes: string[],
    createdAt: string
}