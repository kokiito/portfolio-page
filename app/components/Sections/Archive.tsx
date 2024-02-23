import hellLightsOutImage from "@/assets/images/hellLightsOut.jpg";
import nemachizuki from "@/assets/images/nemachizuki.jpg";
import rebootYourBrainImage from "@/assets/images/rebootYourBrain.jpg";

export const Archive = () => {
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8 md:px-6 lg:px-0">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">
        Works
      </h1>

      {/* Web Section */}
      <h2 className="mt-6 text-xl md:text-2xl">Web</h2>
      <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex max-w-xl justify-center">
          <a
            href="http://nemachizukinoshow.com/2018/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 3:2 */}
            <img
              src={nemachizuki}
              alt="寝待ち月のショーのイメージ画像"
              className="h-[240px] w-[360px] rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p>寝待ち月のショー</p>
            </div>
          </a>
        </div>
      </div>

      {/* Game Section */}
      <h2 className="mt-6 text-xl md:text-2xl">Game</h2>
      <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex max-w-xl justify-center">
          <a
            href="https://unityroom.com/games/hell_lights_out?beta=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 3:2 */}
            <img
              src={hellLightsOutImage}
              alt="game title"
              className="h-[240px] w-[360px] rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p>Hell Lights Out</p>
            </div>
          </a>
        </div>
        <div className="flex max-w-xl justify-center">
          <a
            href="https://debris-works.itch.io/reboot-your-brain"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 3:2 */}
            <img
              src={rebootYourBrainImage}
              alt="game title"
              className="h-[240px] w-[360px] rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p>Reboot Your Brain</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
