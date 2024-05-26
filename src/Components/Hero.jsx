const Hero = ({ data }) => {
  return (
    <div
      className="w-full h-[70vh] max-h-[700px] sm:h-[90vh]"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundPosition: "center",
      }}
      key={data.id}
    >
      <div className="text-white flex flex-col items-center py-10 sm:py-16">
        {data.name && (
          <h1
            className={`headline_sm sm:headline ${
              data.id == 1 ? "text-white" : "text-black"
            } `}
          >
            {data.name}
          </h1>
        )}
        {data.desc && (
          <h2
            className={`subhead_sm sm:subhead ${data.id == 1 ? "text-white" : "text-black"} `}
          >
            {data.desc}
          </h2>
        )}
        {data.exp && <h3 className="text-xl text-gray-500 mt-4">{data.exp}</h3>}

        <div className="flex gap-4 mt-4">
          {data.more && (
            <a
              href={data.more}
              className="button-elevated border-primary rounded-full bg-primary"
            >
              Selengkapnya
            </a>
          )}
          {data.buy && (
            <a
              href={data.buy}
              className="button-elevated border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-white transition-all"
            >
              Beli
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
