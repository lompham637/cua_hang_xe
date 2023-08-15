import Image from 'next/image'
import { CustomFilter, Hero, SearchBar, CarCard } from '@/components'
import { fetchCar } from '@/utils';

export default async function Home() {

  const allCars = await fetchCar();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Danh mục xe
          </h1>
          <p>Khám phá những chiếc xe bạn yêu thích</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}

            </div>
          </section>
        ) : (
          <div className="home__error-container"> 
            <h2 className="text-black text-xl font-bold">NO RESULT</h2>
            <p> {allCars?.message} </p> 
          </div>
        )}

      </div>

    </main>
  )
}
