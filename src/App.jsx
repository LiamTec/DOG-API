import { useEffect } from 'react'
import { useDog } from './store/dog.store'
import DogList from './components/DogList'
import Hero from './components/Hero'
function App() {
  const { dog, getDog } = useDog();
  useEffect(() => {
    getDog();
  }, []);

  return (
    <>
    <Hero />
      <main>
      <section className='py-4'>
        <div className='container'>
        <h2 className="text-center fw-bolder">perros</h2>
          <DogList data={dog} />
        </div>
      </section>
      </main>
    </>
  )
}

export default App
