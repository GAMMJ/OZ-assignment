import useFetch from "../hook/useFetch"

const RandomQuote = () => {
  const [isLoading, data] = useFetch("https://korean-advice-open-api.vercel.app/api/advice")

  return (
    <>
      {!isLoading && (
        <div className="text-[#1e1e1e] bg-white py-[30px] px-0 rounded-[30px]">
          <div className="mb-[15px]">"{data.message}"</div>
          <div className="font-bold inline-block before:content-[''] before:inline-block before:w-[15px] before:h-[3px] before:bg-[#f39d9d] before:align-middle before:mr-[6px]">
            {data.author}
          </div>
        </div>
      )}
    </>
  )
}

export default RandomQuote
