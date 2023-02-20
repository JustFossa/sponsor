import { motion } from "framer-motion";
import {AiOutlineStar as OcticonStar} from "react-icons/ai";
import {GoRepo as OcticonRepo} from "react-icons/go";

type Languages = {
    [key: string]: {
        color: string;
    };
}

const languages = {
    "JavaScript": {
        color: "#f1e05a",
    },
    "TypeScript": {
        color: "#2b7489",
    },
    "HTML": {
        color: "#e34c26",
    },
    "CSS": {
        color: "#563d7c",
    },
    "Python": {
        color: "#3572A5",
    },
} as Languages;

export const RepoCard = ({repo, owner}: any) => {


    return (
        <motion.div>
            <div className="border-solid border-[1px] border-[#30363d] rounded-md p-4 w-full h-full cursor-default">
                <div className="flex flex-row items-center justify-start">
                    <OcticonRepo className="mr-2" fill="#c9d1d9" />
                    <a
                        className="text-[#c9d1d9] font-semibold text-sm hover:underline"
                        href={`https://github.com/${owner.login}/${repo.name}`}
                    >
                        {owner.name}/{repo.name}
                    </a>
                </div>

                <p className="text-[#8b949e] text-[12px] my-1">{repo.description}</p>

                <div className="flex flex-row mt-auto">
                    <span className="mr-4 flex flex-row items-center justify-start">
                        <div
                            className="mr-1 rounded-full"
                            style={{
                                backgroundColor: languages[repo.language]?.color ?? "#000",
                                border: "solid 1px rgba(240, 246, 252, 0.2)",
                                width: "12px",
                                height: "12px",
                            }}
                        />
                        <p className="text-[#c9d1d9] text-[12px]">{repo.language}</p>
                    </span>
                    <motion.a
                        href={repo.stargazers_url}
                        className="text-[12px] flex flex-row items-center justify-start"
                        style={{ color: "#8b949e", textDecoration: "none" }}
                        whileHover={{ color: "#58a6ff", textDecoration: "none" }}
                        transition={{ duration: 0 }}
                    >
                        <OcticonStar fill={"currentColor"} className="mr-1" />
                        {repo.stargazers_count}
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};