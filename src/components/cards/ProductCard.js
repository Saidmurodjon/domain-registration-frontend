const ProductCard = ({ element }) => {
  return (
    <>
      <div className="w-[170px] h-[100px] md:w-[278px] md:h-[140px] rounded-lg shadow-lg mx-auto bg-white mt-2 md:mt-6 xl:mt-4 transition duration-500 transform md:hover:-translate-y-[10px] md:hover:shadow-2xl">
        <div className="flex justify-between mt-8 md:mt-10 mx-4 md:mx-10">
          <img
            src={element.photo}
            alt="product"
            className="w-8 h-8 md:w-12 md:h-12 mx-2"
          />
          <h1 className="text-center mx-auto font-semibold text-xl md:text-3xl">
            {element.name}
          </h1>
        </div>
        
        <a
          href={element.url}
          target="_blank"
          rel="noreferrer"
          className="absolute right-2 bottom-2 text-sm md:text-md font-semibold text-purple-700 cursor-pointer"
        >
          {element.type}
        </a>
      </div>
    </>
  );
};

export default ProductCard;
