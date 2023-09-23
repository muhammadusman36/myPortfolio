"use client"
import React, { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const Blog: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/UsmanMERN/repos');
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    }

    fetchRepos();
  }, []);
  // console.log(repos);

  return (
    <main>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My Recent Coding Projects Showcase
        </p>
      </div>
      <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '50vh' }}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center mx-9">
          {repos.map((repo) => (
            <div className="w-60 grid grid-col-2 p-8 justify-center gap-4 rounded-lg shadow-md blog-card mt-20" key={repo.id}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner p-6 ">
                <a href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                    {repo.name}
                  </div>
                  <div className="col-span-2 rounded-md">
                    {repo.description || 'No description available'}
                  </div>
                  <div className="col-span-1 my-4 fixed bottom-0 left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;



// https://api.github.com/users/UsmanMERN/repos