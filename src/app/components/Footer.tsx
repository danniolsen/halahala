import getConfig from "next/config";

const Footer = () => {
  const { publicRuntimeConfig } = getConfig();

  console.log(publicRuntimeConfig);

  return (
    <footer className="w-full flex items-center justify-center py-10 mb-10 space-x-1">
      <p className="text-slate-700 dark:text-white text-xs">version: </p>
      <p className="text-slate-700 dark:text-white text-xs">
        {publicRuntimeConfig?.version}
      </p>
    </footer>
  );
};

export default Footer;
