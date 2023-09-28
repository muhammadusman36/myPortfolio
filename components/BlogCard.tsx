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
      {/* <div className="w-60 grid grid-col-2 p-8 justify-center gap-4 rounded-lg shadow-md blog-card mt-20 self-center" key={repo.id}>
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
      </div> */}
      <div className="blog-card--container noselect h-72 w-full sm:w-5/6" key={repo.id}>
        <a href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="blog-card--canvas">
            <div className="tracker tr-1" />
            <div className="tracker tr-2" />
            <div className="tracker tr-3" />
            <div className="tracker tr-4" />
            <div className="tracker tr-5" />
            <div className="tracker tr-6" />
            <div className="tracker tr-7" />
            <div className="tracker tr-8" />
            <div className="tracker tr-9" />
            <div className="tracker tr-10" />
            <div className="tracker tr-11" />
            <div className="tracker tr-12" />
            <div className="tracker tr-13" />
            <div className="tracker tr-14" />
            <div className="tracker tr-15" />
            <div className="tracker tr-16" />
            <div className="tracker tr-17" />
            <div className="tracker tr-18" />
            <div className="tracker tr-19" />
            <div className="tracker tr-20" />
            <div className="tracker tr-21" />
            <div className="tracker tr-22" />
            <div className="tracker tr-23" />
            <div className="tracker tr-24" />
            <div className="tracker tr-25" />
            <div id="card">
              <p id="prompt"><div className="col-span-2 text-lg font-bold capitalize rounded-md">
                {repo.name}
              </div>
              </p>
              <div className="title">
                <div className="col-span-2 text-lg font-bold capitalize rounded-md fixed top-0 p-4">
                  {repo.name}
                </div>
                <div className="col-span-2 rounded-md px-2">
                  {repo.description?.slice(0, 80) || 'No description available'}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    </>
  )
}
