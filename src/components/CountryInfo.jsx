export function Country ({ countries, color, name }) {
  return (
    <ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
      {countries?.map((country, index) => {
        return (
          <li
            className='rounded-md shadow-2xl' style={{ backgroundColor: color }} key={index} onClick={() => {
              name(country.name.toLowerCase())
            }}
          >
            <figure>
              <img
                src={country.flag}
                alt={country.flagAlt}
                className='w-full object-cover h-56 rounded-t-md'
              />
            </figure>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2'>{country.name}</h2>
              <ul className='flex flex-col gap-2'>
                <li>
                  <span className='font-bold'>Population: </span>
                  <span>{country.population}</span>
                </li>
                <li>
                  <span className='font-bold'>Region: </span>
                  <span>{country.region}</span>
                </li>
                <li>
                  <span className='font-bold'>Capital: </span>
                  <span>{country.capital}</span>
                </li>
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
