const Product = ({ data }) => {
  return (
    <a
      href={data.more}
      className="h-[580px] w-full"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundPosition: "center",
      }}
      key={data.id}
    >
      <div
        className={`py-14 flex flex-col items-center gap-2 ${
          data.color == "black" ? "text-white" : "text-black"
        } `}
      >
        {data.name && <h2 className="text-4xl font-semibold">{data.name}</h2>}
        {data.icon && <img src={data.icon} alt="Icon" className="mx-auto" />}
        {data.desc && <h3 className="text-xl">{data.desc}</h3>}

        <div className="flex gap-4 mt-2">
          {data.more && (
            <a
              href={data.more}
              className="button-second font-medium border border-primary rounded-full bg-primary text-white"
            >
              Selengkapnya
            </a>
          )}
          {data.buy && (
            <a
              href={data.buy}
              className="button-second font-medium border border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-white transition-all"
            >
              Beli
            </a>
          )}
        </div>
      </div>
    </a>
  );
};

export default Product;
