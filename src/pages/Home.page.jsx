import React, {useState,useEffect} from "react"
import Slider from "react-slick";
import axios from "axios";

//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config"


const Homepage = () => {
  const [popularMovies,setPopularMovies]=useState([])
  const [topRatedMovies,setTopRatedMovies]=useState([])
  const [upcomingMovies,setUpComingMovies]=useState([])
  const [nowPlayingMovies,setNowPlayingMovies]=useState([])
  const [latestMovies,setLatestMovies]=useState([])



  useEffect(()=>{
        const requestPopularMovies = async() =>{
         const getPopularMovies = await axios.get("/movie/popular");
         setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies()
  },[])

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpComingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setNowPlayingMovies(getNowPlayingMovies.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  useEffect(() => {
    const requestLatestMovies = async () => {
      const getLatestMovies = await axios.get("/movie/top_rated");
      setLatestMovies(getLatestMovies.data.results);
    };
    requestLatestMovies();
  }, []);

    return(
        <>
        <div className="flex flex-col gap-10"> 
        <div className="container mx-auto px-4 my-8">
            <h1 className="text-2xl font-bold text-grey-800 my-3">
                The best of Entertainment
                </h1>
        <EntertainmentCardSlider/>
        </div>


       
        <div className="bg-bms-800 py-12 ">
        <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <div>
                  <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                   alt="Premier"
                   className="w-full h-full"/>
              </div>
            </div>
        < PosterSlider 
        images={popularMovies} 
        title="Premieres" 
        subtitle="Brand new releases every friday"
        isDark/>
        </div>
        </div>
        </div>
        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={topRatedMovies} 
          title="Online Streaming Events" isDark={false}
         />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={upcomingMovies} 
          title="Outdoor Events" isDark={false}
         />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={nowPlayingMovies} 
          title="Popular Events" isDark={false}
         />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
          images={latestMovies} 
          title="Top Games & Sports Events" isDark={false}
         />
        </div>
        </>

    )
}

export default Homepage;
