import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Location } from '@/icons/Location'
import { useRef } from 'react'
import { RepoCard } from '@/components/RepoCard'


export default function Home({data, repos}: any) {
  const amount = useRef<string>("1")

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ease: "easeOut", duration: 0.5 }}
        className="w-full flex flex-col items-center justify-center h-full mt-20"
      >
        <h1 className="text-2xl font-medium text-center text-text mb-10">Become a Sponsor to <Link className="hover:underline" href={`https://github.com/${data.login}`}>{data.name}</Link></h1>
        <div className="flex flex-row items-center justify-center">
          <Image width={80} height={80} className="rounded-full w-20 h-20" src={data.avatar_url} alt="Avatar" />
          <div className="flex flex-col items-center justify-center ml-5">
            <Link className="text-xl text-text underline hover:text-highlight hover:no-underline font-semibold" href={`https://github.com/${data.login}`}>{data.name}</Link>
            <p className="text-dark text-sm mr-auto">{data.login}</p>
            <div className="flex flex-row items-center justify-center mt-1 mr-auto">
              <Location fill="#8b949e" className="text-text text-sm mr-1" />
              <Link href={`https://www.google.com/maps/search/?api=1&query=${data.location}`} className="text-highlight text-sm hover:underline">{data.location}</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-[80%] gap-y-5">
          <p className="text-text text-left">👋 Hey there, I&apos;m <b>{data.name}</b> I&apos;m a student currently working on many open source projects in my free time</p>
          <p className="text-text text-left">I enjoy working with technologies such as <b>Next.js, Typescript, React.js</b> and many more, to create amazing <b>UX</b> and <b>UI</b> in web applications. My goal is to always make the web app as performant as possible and to deliver reliable and secure backend. I&apos;m constantly looking forward to learn new skills, which i can later use to improve my older projects.</p>
          <p className="text-text text-left">If you choose to support me (any amount is appreciated), the funds will help me to cover expenses such as server hosting and domains and will also help me improve my knowledge even further. Feel free to hit me up and I&apos;ll be more than happy to feature you on my <Link href={`https://github.com/${data.login}`} className="text-highlight font-medium hover:underline">GitHub</Link> profile or projects as a little &quot;thank you&quot; 👍 </p>
        </div>
        <div className="flex flex-row mt-10 w-[80%] items-center justify-center">
          <div className="flex flex-row items-center  w-24 h-10 border-dark border rounded-md p-2 focus-within:border-highlight">
            <span className="text-dark mt-[1px]">$</span>
            <input 
              className="h-full ml-1 w-16 outline-none text-white bg-background "
              placeholder="5"
              type="number"
              min={1}
              onChange={e => amount.current = e.target.value}
            />
          </div>
          <button
            className="w-20 h-10 ml-5 bg-darker border-dark border rounded-md text-text hover:bg-darker2 transition-all ease-in-out duration-200"
          >
            Donate
          </button>
        </div>
        <div className="flex flex-col mt-10">
        <h1 className="text-2xl text-dark font-light">Featured Work</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-4">
            {repos.map((repo: any) => (
              <RepoCard repo={repo} owner={data} key={repo.name} />
            ))}
          </div>  
        </div>
        <div className="flex flex-col mt-12">
            <h1 className="text-sm text-dark mb-12">Psst... this project is <Link className="text-red-500 hover:underline" href="https://github.com/JustFossa/sponsor">open source</Link>!</h1>
        </div>
      </motion.div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}`).then(res => res.json())
  const repos = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?type=owner&per_page=100`).then(res => res.json())

  const topRepos = repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count).slice(0, 6)


  return {
    props: {
      data,
      repos: topRepos
    }
  }
}
