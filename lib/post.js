import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((filename) => {
    const id = filename.split('.').slice(0, -1);

    const fullPath = path.join(postsDirectory, filename);
    const AllContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(AllContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
