import './SearchBar.css'

export const SearchBar = ({city,setCity,searchweather}) => {
    const keypress = (e) => {
        if (e.key === 'Enter') {
            searchweather();
        }
    }
    return (
        <div className="flex items-center justify-center mt-8">
            <input
                type="text"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                
                className="px-4 py-2 w-64 sm:w-80 md:w-96 rounded-l-lg border border-gray-300 focus:outline-none "
            >
            </input>
            <button
                onClick={searchweather}
                className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-purple-600 transition duration-200"
            >
                Search
            </button>
        </div>
    )
}