import data from '../mocks/single-country.json'
export function FullPage ({ bgColor, country }) {
  return (
    <section className='w-screen h-screen grid place-content-center absolute right-0 top-0 px-20' style={{ backgroundColor: bgColor }}>
      {data.map(data => {
        return (
          <div className='w-[80vw] h-[80vh] flex items-center gap-20'>
            <figure>
              <img src={data.flag.svg} alt={data.flag.alt} className='' />
            </figure>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia consequatur eveniet nemo reprehenderit. Voluptatem vitae, nesciunt quasi suscipit culpa deserunt eum in maiores, enim similique eligendi dolores omnis quae.
            </div>
          </div>
        )
      })}
    </section>
  )
}
