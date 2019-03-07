/* tslint:disable */
//  This file was automatically generated and should not be edited.
true;
export type Maybe<T> = T | null;

export interface ModelPostFilterInput {
  id?: Maybe<ModelIdFilterInput>;

  title?: Maybe<ModelStringFilterInput>;

  and?: Maybe<(Maybe<ModelPostFilterInput>)[]>;

  or?: Maybe<(Maybe<ModelPostFilterInput>)[]>;

  not?: Maybe<ModelPostFilterInput>;
}

export interface ModelIdFilterInput {
  ne?: Maybe<string>;

  eq?: Maybe<string>;

  le?: Maybe<string>;

  lt?: Maybe<string>;

  ge?: Maybe<string>;

  gt?: Maybe<string>;

  contains?: Maybe<string>;

  notContains?: Maybe<string>;

  between?: Maybe<(Maybe<string>)[]>;

  beginsWith?: Maybe<string>;
}

export interface ModelStringFilterInput {
  ne?: Maybe<string>;

  eq?: Maybe<string>;

  le?: Maybe<string>;

  lt?: Maybe<string>;

  ge?: Maybe<string>;

  gt?: Maybe<string>;

  contains?: Maybe<string>;

  notContains?: Maybe<string>;

  between?: Maybe<(Maybe<string>)[]>;

  beginsWith?: Maybe<string>;
}

export interface ModelCommentFilterInput {
  id?: Maybe<ModelIdFilterInput>;

  content?: Maybe<ModelStringFilterInput>;

  and?: Maybe<(Maybe<ModelCommentFilterInput>)[]>;

  or?: Maybe<(Maybe<ModelCommentFilterInput>)[]>;

  not?: Maybe<ModelCommentFilterInput>;
}

export interface ModelBlogFilterInput {
  id?: Maybe<ModelIdFilterInput>;

  name?: Maybe<ModelStringFilterInput>;

  and?: Maybe<(Maybe<ModelBlogFilterInput>)[]>;

  or?: Maybe<(Maybe<ModelBlogFilterInput>)[]>;

  not?: Maybe<ModelBlogFilterInput>;
}

export interface CreateBlogInput {
  id?: Maybe<string>;

  name: string;
}

export interface UpdateBlogInput {
  id: string;

  name?: Maybe<string>;
}

export interface DeleteBlogInput {
  id?: Maybe<string>;
}

export interface CreatePostInput {
  id?: Maybe<string>;

  title: string;

  postBlogId?: Maybe<string>;
}

export interface UpdatePostInput {
  id: string;

  title?: Maybe<string>;

  postBlogId?: Maybe<string>;
}

export interface DeletePostInput {
  id?: Maybe<string>;
}

export interface CreateCommentInput {
  id?: Maybe<string>;

  content?: Maybe<string>;

  commentPostId?: Maybe<string>;
}

export interface UpdateCommentInput {
  id: string;

  content?: Maybe<string>;

  commentPostId?: Maybe<string>;
}

export interface DeleteCommentInput {
  id?: Maybe<string>;
}

export interface ModelBooleanFilterInput {
  ne?: Maybe<boolean>;

  eq?: Maybe<boolean>;
}

export interface ModelFloatFilterInput {
  ne?: Maybe<number>;

  eq?: Maybe<number>;

  le?: Maybe<number>;

  lt?: Maybe<number>;

  ge?: Maybe<number>;

  gt?: Maybe<number>;

  contains?: Maybe<number>;

  notContains?: Maybe<number>;

  between?: Maybe<(Maybe<number>)[]>;
}

export interface ModelIntFilterInput {
  ne?: Maybe<number>;

  eq?: Maybe<number>;

  le?: Maybe<number>;

  lt?: Maybe<number>;

  ge?: Maybe<number>;

  gt?: Maybe<number>;

  contains?: Maybe<number>;

  notContains?: Maybe<number>;

  between?: Maybe<(Maybe<number>)[]>;
}

export enum ModelSortDirection {
  Asc = "ASC",
  Desc = "DESC"
}

// ====================================================
// Documents
// ====================================================

export type CreateBlogVariables = {
  input: CreateBlogInput;
};

export type CreateBlogMutation = {
  __typename?: "Mutation";

  createBlog: Maybe<CreateBlogCreateBlog>;
};

export type CreateBlogCreateBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<CreateBlogPosts>;
};

export type CreateBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<CreateBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type CreateBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type UpdateBlogVariables = {
  input: UpdateBlogInput;
};

export type UpdateBlogMutation = {
  __typename?: "Mutation";

  updateBlog: Maybe<UpdateBlogUpdateBlog>;
};

export type UpdateBlogUpdateBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<UpdateBlogPosts>;
};

export type UpdateBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<UpdateBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type UpdateBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type DeleteBlogVariables = {
  input: DeleteBlogInput;
};

export type DeleteBlogMutation = {
  __typename?: "Mutation";

  deleteBlog: Maybe<DeleteBlogDeleteBlog>;
};

export type DeleteBlogDeleteBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<DeleteBlogPosts>;
};

export type DeleteBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<DeleteBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type DeleteBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type CreatePostVariables = {
  input: CreatePostInput;
};

export type CreatePostMutation = {
  __typename?: "Mutation";

  createPost: Maybe<CreatePostCreatePost>;
};

export type CreatePostCreatePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<CreatePostBlog>;

  comments: Maybe<CreatePostComments>;
};

export type CreatePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type CreatePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<CreatePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type CreatePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type UpdatePostVariables = {
  input: UpdatePostInput;
};

export type UpdatePostMutation = {
  __typename?: "Mutation";

  updatePost: Maybe<UpdatePostUpdatePost>;
};

export type UpdatePostUpdatePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<UpdatePostBlog>;

  comments: Maybe<UpdatePostComments>;
};

export type UpdatePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type UpdatePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<UpdatePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type UpdatePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type DeletePostVariables = {
  input: DeletePostInput;
};

export type DeletePostMutation = {
  __typename?: "Mutation";

  deletePost: Maybe<DeletePostDeletePost>;
};

export type DeletePostDeletePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<DeletePostBlog>;

  comments: Maybe<DeletePostComments>;
};

export type DeletePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type DeletePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<DeletePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type DeletePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type CreateCommentVariables = {
  input: CreateCommentInput;
};

export type CreateCommentMutation = {
  __typename?: "Mutation";

  createComment: Maybe<CreateCommentCreateComment>;
};

export type CreateCommentCreateComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<CreateCommentPost>;
};

export type CreateCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type UpdateCommentVariables = {
  input: UpdateCommentInput;
};

export type UpdateCommentMutation = {
  __typename?: "Mutation";

  updateComment: Maybe<UpdateCommentUpdateComment>;
};

export type UpdateCommentUpdateComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<UpdateCommentPost>;
};

export type UpdateCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type DeleteCommentVariables = {
  input: DeleteCommentInput;
};

export type DeleteCommentMutation = {
  __typename?: "Mutation";

  deleteComment: Maybe<DeleteCommentDeleteComment>;
};

export type DeleteCommentDeleteComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<DeleteCommentPost>;
};

export type DeleteCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type GetBlogVariables = {
  id: string;
};

export type GetBlogQuery = {
  __typename?: "Query";

  getBlog: Maybe<GetBlogGetBlog>;
};

export type GetBlogGetBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<GetBlogPosts>;
};

export type GetBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<GetBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type GetBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type ListBlogsVariables = {
  filter?: Maybe<ModelBlogFilterInput>;
  limit?: Maybe<number>;
  nextToken?: Maybe<string>;
};

export type ListBlogsQuery = {
  __typename?: "Query";

  listBlogs: Maybe<ListBlogsListBlogs>;
};

export type ListBlogsListBlogs = {
  __typename: "ModelBlogConnection";

  items: Maybe<(Maybe<ListBlogsItems>)[]>;

  nextToken: Maybe<string>;
};

export type ListBlogsItems = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<ListBlogsPosts>;
};

export type ListBlogsPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<ListBlogs_Items>)[]>;

  nextToken: Maybe<string>;
};

export type ListBlogs_Items = {
  __typename: "Post";

  id: string;

  title: string;
};

export type GetPostVariables = {
  id: string;
};

export type GetPostQuery = {
  __typename?: "Query";

  getPost: Maybe<GetPostGetPost>;
};

export type GetPostGetPost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<GetPostBlog>;

  comments: Maybe<GetPostComments>;
};

export type GetPostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type GetPostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<GetPostItems>)[]>;

  nextToken: Maybe<string>;
};

export type GetPostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type ListPostsVariables = {
  filter?: Maybe<ModelPostFilterInput>;
  limit?: Maybe<number>;
  nextToken?: Maybe<string>;
};

export type ListPostsQuery = {
  __typename?: "Query";

  listPosts: Maybe<ListPostsListPosts>;
};

export type ListPostsListPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<ListPostsItems>)[]>;

  nextToken: Maybe<string>;
};

export type ListPostsItems = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<ListPostsBlog>;

  comments: Maybe<ListPostsComments>;
};

export type ListPostsBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type ListPostsComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<ListPosts_Items>)[]>;

  nextToken: Maybe<string>;
};

export type ListPosts_Items = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type GetCommentVariables = {
  id: string;
};

export type GetCommentQuery = {
  __typename?: "Query";

  getComment: Maybe<GetCommentGetComment>;
};

export type GetCommentGetComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<GetCommentPost>;
};

export type GetCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type ListCommentsVariables = {
  filter?: Maybe<ModelCommentFilterInput>;
  limit?: Maybe<number>;
  nextToken?: Maybe<string>;
};

export type ListCommentsQuery = {
  __typename?: "Query";

  listComments: Maybe<ListCommentsListComments>;
};

export type ListCommentsListComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<ListCommentsItems>)[]>;

  nextToken: Maybe<string>;
};

export type ListCommentsItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<ListCommentsPost>;
};

export type ListCommentsPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnCreateBlogVariables = {};

export type OnCreateBlogSubscription = {
  __typename?: "Subscription";

  onCreateBlog: Maybe<OnCreateBlogOnCreateBlog>;
};

export type OnCreateBlogOnCreateBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<OnCreateBlogPosts>;
};

export type OnCreateBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<OnCreateBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnCreateBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnUpdateBlogVariables = {};

export type OnUpdateBlogSubscription = {
  __typename?: "Subscription";

  onUpdateBlog: Maybe<OnUpdateBlogOnUpdateBlog>;
};

export type OnUpdateBlogOnUpdateBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<OnUpdateBlogPosts>;
};

export type OnUpdateBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<OnUpdateBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnUpdateBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnDeleteBlogVariables = {};

export type OnDeleteBlogSubscription = {
  __typename?: "Subscription";

  onDeleteBlog: Maybe<OnDeleteBlogOnDeleteBlog>;
};

export type OnDeleteBlogOnDeleteBlog = {
  __typename: "Blog";

  id: string;

  name: string;

  posts: Maybe<OnDeleteBlogPosts>;
};

export type OnDeleteBlogPosts = {
  __typename: "ModelPostConnection";

  items: Maybe<(Maybe<OnDeleteBlogItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnDeleteBlogItems = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnCreatePostVariables = {};

export type OnCreatePostSubscription = {
  __typename?: "Subscription";

  onCreatePost: Maybe<OnCreatePostOnCreatePost>;
};

export type OnCreatePostOnCreatePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<OnCreatePostBlog>;

  comments: Maybe<OnCreatePostComments>;
};

export type OnCreatePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type OnCreatePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<OnCreatePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnCreatePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type OnUpdatePostVariables = {};

export type OnUpdatePostSubscription = {
  __typename?: "Subscription";

  onUpdatePost: Maybe<OnUpdatePostOnUpdatePost>;
};

export type OnUpdatePostOnUpdatePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<OnUpdatePostBlog>;

  comments: Maybe<OnUpdatePostComments>;
};

export type OnUpdatePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type OnUpdatePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<OnUpdatePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnUpdatePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type OnDeletePostVariables = {};

export type OnDeletePostSubscription = {
  __typename?: "Subscription";

  onDeletePost: Maybe<OnDeletePostOnDeletePost>;
};

export type OnDeletePostOnDeletePost = {
  __typename: "Post";

  id: string;

  title: string;

  blog: Maybe<OnDeletePostBlog>;

  comments: Maybe<OnDeletePostComments>;
};

export type OnDeletePostBlog = {
  __typename: "Blog";

  id: string;

  name: string;
};

export type OnDeletePostComments = {
  __typename: "ModelCommentConnection";

  items: Maybe<(Maybe<OnDeletePostItems>)[]>;

  nextToken: Maybe<string>;
};

export type OnDeletePostItems = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;
};

export type OnCreateCommentVariables = {};

export type OnCreateCommentSubscription = {
  __typename?: "Subscription";

  onCreateComment: Maybe<OnCreateCommentOnCreateComment>;
};

export type OnCreateCommentOnCreateComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<OnCreateCommentPost>;
};

export type OnCreateCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnUpdateCommentVariables = {};

export type OnUpdateCommentSubscription = {
  __typename?: "Subscription";

  onUpdateComment: Maybe<OnUpdateCommentOnUpdateComment>;
};

export type OnUpdateCommentOnUpdateComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<OnUpdateCommentPost>;
};

export type OnUpdateCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};

export type OnDeleteCommentVariables = {};

export type OnDeleteCommentSubscription = {
  __typename?: "Subscription";

  onDeleteComment: Maybe<OnDeleteCommentOnDeleteComment>;
};

export type OnDeleteCommentOnDeleteComment = {
  __typename: "Comment";

  id: string;

  content: Maybe<string>;

  post: Maybe<OnDeleteCommentPost>;
};

export type OnDeleteCommentPost = {
  __typename: "Post";

  id: string;

  title: string;
};
