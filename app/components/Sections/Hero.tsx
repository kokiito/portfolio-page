import {
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { ZennIcon } from "@/components/Parts/ZennIcon";
import image from "@/assets/images/kokiitoIcon.jpg";
import { SVGProps } from "react";

function IconamoonArrowDown3SquareBold(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 8l3 3m0 0l3-3m-3 3V9"
      ></path>
    </svg>
  );
}

export const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[#f5eb78] text-[#36028a]">
      {/* dark modeの切り替えボタン */}
      <div className="absolute right-[24px] top-[24px]">
        {/* <ColorThemeButton /> */}
      </div>
      <div className="absolute bottom-[30px] right-[calc(50%-20px)]">
        {/* <Icon as={ChevronDownIcon} w={"40px"} h={"40px"} /> */}
      </div>
      {/* Heroの中身 */}
      <div className="flex h-full items-center justify-center">
        <div className="flex-col">
          <div className="m-auto h-40 w-40">
            <img
              className="rounded-full"
              src={image}
              alt={"artist icon"}
            />
          </div>
          <div className={"px-[20px]"}>
            <h1 className={"text-[30px]"}>Koki Ito</h1>
            <ul className="mt-2">
              <li>
                🐶 Web Developer at Aidemy inc. (mainly
                frontend with TypeScript)
              </li>
              <li>⚡️ Sometimes create games and videos</li>
              <li>🧗 Climbing as well</li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <a
                href={"https://github.com/kokiito"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={"20px"} />
              </a>
              <a
                href={"https://twitter.com/koki_robo"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={"20px"} />
              </a>
              <a
                href={"https://zenn.dev/kokiito_robot"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zenn"
              >
                <ZennIcon />
              </a>
              <a
                href={
                  "https://www.youtube.com/@kokidevlife6448"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={"20px"} />
              </a>
              <a
                href={
                  "https://www.instagram.com/kokiito_29/"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={"20px"} />
              </a>
            </div>
          </div>
        </div>
        <IconamoonArrowDown3SquareBold className="absolute bottom-[30px] text-[30px]" />
      </div>
    </div>
  );
};
