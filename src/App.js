import './App.css';
import {  useAppContext } from './AppContext'

function App() {

const {
  data,
  setQuery,
  query
} = useAppContext();

console.log(data)

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="App drop-shadow-2xl bg-slate-100 w-[500px] h-[550px] p-6">
        <input className='p-3 my-5 border w-full border-blue-200 rounded-3xl' type="text" value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder="Search..."/>
        {
          data ? (
            <>
              <div className="flex items-center justify-center">
                <img className='h-auto w-52' src={data.sprites.other.dream_world.front_default} alt=""/>
              </div>
              <div className='flex items-end justify-between mt-8'>
                <p className='font-bold'>Name:</p>
                <p className='text-blue-600 font-semibold uppercase'>{data.name}</p>
              </div>
              <div className='flex items-end justify-between mt-3'>
                <p className='font-bold'>Abilities:</p>
                <p className='text-blue-600 font-semibold'>
                    {
                      data.abilities.map((ability, index) => {
                        return (
                          <span>{`${ability.ability.name} ${data.abilities.length - 1 === index ? '': ','} `}</span>
                        )
                      })
                    }
                </p>
            </div>
            </>
          ) : <p className='font-bold uppercase text-red-500 text-2xl mt-8'>No Pokemon found</p>
        }
      </div>
    </div>
  );
}

export default App;
