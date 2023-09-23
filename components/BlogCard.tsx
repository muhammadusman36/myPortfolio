import React from 'react'


interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;

}


export default function BlogCard({ repo }: { repo: Repo }) {
  return (
    <>
      <div className="w-60 grid grid-col-2 p-8 justify-center gap-4 rounded-lg shadow-md blog-card mt-20 self-center" key={repo.id}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
