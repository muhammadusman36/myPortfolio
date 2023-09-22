"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa"

// import Image from 'next/image'
// import 
function About() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  // useEffect(() => {
  //   let useravatar = JSON.parse(localStorage.getItem("github_avatar"))
  //   setAvatar(useravatar)
  // }, [])

  const userInfo = {
    "full_name": "Benaiah Alumona",
    "tag_line": "Making The Impossible Possible. Using 1's and 0's.",
    "intro_tagline": "Mission driven software engineer, with a passion for thoughtful UI design, collaboration, and teaching.",
    "subTitle": "Problem solving is what makes me unique.",
    "tech_year": "2019",
    "github_username": "benrobo",
    "user_skill": "Software Engineer",
    "favorites_quote": "Willingness to take intelligient risks in the pursuit of your clearly defined goals, put you on a greater side of life. Enabling you to archive the same level of success in 1 or 2 years, which may take other people10 or 20 years to archieve, if lessed focused.",
    "greeting_type": "Hi ✌",
    "bio_desc": [
      "As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company."
    ]
  }

  return (
    <main className="w-full flex flex-col md:flex-row justify-between items-center mt-28 sm:mt-0">
      <div className="w-full md:w-1/2">
        <div className="w-full h-[450px] bg-cover bg-center bg-no-repeat md:w-[350px] rounded-md" style={{
          backgroundImage: `url("https://shorturl.at/oqu59")`
        }}></div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0`}>
          <p className={`text-[12px] text-white-200 `}>Introduce</p>
          <div className={`relative top-[20px]`}>
            <h1 className={`text-[35px] font-bold mb-[20px]`}>
              Hi ✌️ I'm Muhammad Usman
            </h1>
            <br />
            <br />
            <p className={`text-[15px] text-white-200 p-2 px-5 bg-dark-400 border-l-[5px] border-solid border-l-green-200 italic`}>
              {userInfo.intro_tagline}
            </p>
            <br />
            {
              userInfo.bio_desc.length > 0 ?
                userInfo.bio_desc.map((bio, i) => {
                  return (
                    <p className={`text-[14px] mb-5 text-white-200`}>{bio}</p>
                  )
                })
                :
                "Opps, 😬 looks like I dont have a bio."
            }
          </div>
        </div>
      </div>
    </main>

  )
}

export default About




// https://api.github.com/users/UsmanMERN/repos

// get repest to get all github data