const Footer = () => {
  return (
    <div className="mt-8 text-slate-500 text-xs">
      <p>
        Built with{" "}
        <span className="inline-block font-semibold bg-linear-to-r from-cyan-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
          Vite
        </span>{" "}
        + <span className="text-cyan-600 font-semibold">React</span> +{" "}
        <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
      </p>
      <p className="mt-8 flex items-center justify-center">
        &copy;
        <a
          href="https://portfolio-munyua.vercel.app/"
          className="text-cyan-300 hover:underline">
          munyua
        </a>
      </p>
    </div>
  );
};

export default Footer;
