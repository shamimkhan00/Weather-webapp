export const WeatherCard = ({ Data ,forecastData }) => {
    if (Data == null) {
        return
    }
    console.log(Data)
    return (<>
        <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-sm text-center border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{Data.name}</h2>

            <div className="flex items-center justify-center gap-4 mt-4">
                <img
                    className="w-20 h-20"
                    src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`}
                    alt={Data.weather[0].description}
                />
                <div className="text-left">
                    <p className="text-2xl text-gray-800 font-semibold">
                        🌡 {Data.main.temp}°C
                    </p>
                    <p className="capitalize text-gray-600">{Data.weather[0].description}</p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-blue-700 font-medium">
                <div className="bg-blue-50 rounded-lg py-2 px-3">
                    💧 Humidity
                    <p className="text-lg text-blue-900">{Data.main.humidity}%</p>
                </div>
                <div className="bg-blue-50 rounded-lg py-2 px-3">
                    💨 Wind Speed
                    <p className="text-lg text-blue-900">{Data.wind.speed} km/h</p>
                </div>
            </div>
        </div>
        {forecastData.length > 0 && (
            <div className="mt-8 w-full max-w-4xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">5-Day Forecast</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {forecastData.map((item, index) => {
                        const date = new Date(item.dt_txt).toLocaleDateString(undefined, {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                        });

                        return (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md"
                            >
                                <p className="text-blue-800 font-semibold">{date}</p>
                                <img
                                    className="mx-auto w-14"
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt={item.weather[0].description}
                                />
                                <p className="text-lg text-gray-700 font-medium">{item.main.temp}°C</p>
                                <p className="text-sm capitalize text-gray-500">{item.weather[0].description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}
    </>

    )
}