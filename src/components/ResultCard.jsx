
const ResultCard = ({data}) => {
  return (
    <div className='w-64 h-72 border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer'>
      {
        data.type === 'Photos' ? (
          <div>
            <h1 className="text-gray-300 bg-transparent z  font-bold ">{data.title}</h1>
            {data.src ? (
              <img src={data.src} alt={data.description} className='w-full h-full object-cover' />
            ) : (
              <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>No Image Available</span>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  )
}

export default ResultCard