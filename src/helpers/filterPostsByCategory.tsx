export const filterPosts = (posts: any[], categoryId: string | null): any[] => {
  if (categoryId === null) {
    return posts;
  } else {
    return posts?.filter((post) => post.category === categoryId);
  }
};
