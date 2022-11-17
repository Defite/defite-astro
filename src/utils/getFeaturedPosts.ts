import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../types";

const getFeaturedPosts = (posts: MarkdownInstance<Frontmatter>[]) =>
  posts.filter(({ frontmatter }) => frontmatter.featured);

export default getFeaturedPosts;
