import BlogCard from '@/components/BlogCard';
import React from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;

}

const Blog: React.FC = async () => {

  async function fetchRepos(): Promise<Repo[]> {
    try {
      const response = await fetch('https://api.github.com/users/UsmanMERN/repos');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const data = await response.json();
      return data as Repo[];
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }
  const repos = await fetchRepos();

  return (
    <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '70vh' }}>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My Recent Coding Projects Showcase
        </p>
      </div>
      <div className="grid grid-cols-1 xsm:grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mx-9">
        {repos?.map((repo, i) => (
          <BlogCard repo={repo} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Blog;



// https://api.github.com/users/UsmanMERN/repos