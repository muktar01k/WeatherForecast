import { useState } from 'react'
import Cloud from '../assets/clouds.svg'
import Location from '../assets/location.svg'
import Temp from '../assets/temp.svg'
import Git from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Whatsappp from '../assets/whats.svg'

const Weather = () => {

    const [location, setLocation] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)


    const fetchWeather = async () => {
        const apiKey = "b43deb410d1345a3902114718242308"
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`

        try {
            const response = await fetch(url)
            const data = await response.json()

            if (response.ok) {
                setWeatherData(data)
                setError(null)
            } else {
                setError(data.error.message)
                setWeatherData(null)
            }
        } catch (err) {
            setError("Failed To Fetch Data")
            setWeatherData(null)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchWeather()
    }


    return (
        <div className="bg-blue-200 h-[61rem]">
            <nav className="flex justify-center md:gap-[3rem]">
                <h1 className='font-bold text-2xl md:text-4xl mt-[1rem]'>Weather Forecast</h1>
                <img className='w-[5rem]' src={Cloud} alt="" />
            </nav>
            <div className="">
                <div className="flex items-center justify-center mt-[3rem] gap-[0.5rem]">
                    <div className="md:w-[27.5rem] h-[3.6rem] rounded-xl border-2 border-blue-400">
                        <input
                            className='md:w-[27.3rem] h-[3.4rem] rounded-xl pl-[1rem]'
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Enter City/Town...' />

                    </div>
                    <div className="">
                        <button onClick={handleSearch} type='submit' className='w-[8rem] h-[3.4rem] md:w-[10rem] md:h-[3.4rem] bg-blue-400 rounded-xl shadow-xl'>Search Now</button>
                    </div>
                </div>
            </div>

            {error && <p className='error'>{error}</p>}

            <div className="flex justify-center items-center mt-[6rem]">
                <div className="bg-white w-[18rem] h-[33rem] md:h-[18rem] md:w-[60rem] rounded-xl shadow-xl pt-[1.5rem] md:pt-[3rem]">
                    {weatherData && (
                        <div className=" md:flex md:justify-center font-semibold text-xl  gap-[8rem]">
                            <div className="text-center flex flex-col justify-center items-center">
                                <img className='w-[5rem]' src={Location} alt="" />
                                <h2 className='mt-[2rem] text-2xl text-red-600'>{weatherData.location.name}</h2>
                            </div>

                            <div className="text-center flex flex-col justify-center items-center mt-[1rem]">
                                <img className='w-[5rem]' src={Temp} alt="" />
                                <h3 className='text-green-600 text-2xl mt-[2rem]'>{weatherData.current.temp_c}</h3>
                            </div>

                            <div className="text-center flex flex-col justify-center items-center mt-[1rem]">
                                <img className='w-[5rem]' src={Cloud} alt="" />
                                <h4 className='text-red-700 text-2xl mt-[2rem]'>{weatherData.current.condition.text}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-[2.8rem]">
                <div className="text-center">
                    <p className='text-gray-700 font-bold'>Created By SnowDev</p>
                    <p className='text-gray-500'>© 2024 All right reserved</p>
                </div>
                <div className="flex justify-center gap-[2rem] mt-[2rem]">
                    <a href="https://github.com/muktar01k">
                        <img className='w-[2rem]' src={Git} alt="" />
                    </a>

                    <a href="https://wa.me/2349132630151?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20with%20you.">
                        <img className='w-[2rem]' src={Whatsappp} alt="" />
                    </a>

                    <img className='w-[2rem]' src={Instagram} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Weather