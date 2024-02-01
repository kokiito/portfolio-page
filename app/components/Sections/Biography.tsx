export const Biography = () => {
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8 md:px-6 lg:px-0">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">
        Biography
      </h1>
      <ul className="mt-6">
        <li className="mb-4">
          <strong className="font-bold">1995</strong>
          <span className="ml-2">Born in Osaka, Japan</span>
        </li>
        <li className="mb-4">
          <strong className="font-bold">2020</strong>
          <span className="ml-2">
            {
              "Completed the Master's Program in the Graduate School of Information Science at Ritsumeikan University"
            }
          </span>
        </li>
        <li className="mb-4">
          <strong className="font-bold">2020</strong>
          <span className="ml-2">
            Started working at{" "}
            <a
              className="#36028a hover:underline"
              href="https://aidemy.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aidemy
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};
