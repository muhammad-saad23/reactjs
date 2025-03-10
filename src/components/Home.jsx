import reactLogo from '../assets/react.svg'
import React from 'react'
import Card from './card'
import { Await } from 'react-router-dom';
import { useState,useEffect } from "react";
import PropTypes from 'prop-types'

export default function Home(props) {
  results= [      
      {
        "adult": false,
        "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        "genre_ids": [878, 28, 12],
        "id": 912649,
        "original_language": "en",
        "original_title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        "popularity": 3685.151,
        "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        "release_date": "2024-10-22",
        "title": "Venom: The Last Dance",
        "video": false,
        "vote_average": 6.403,
        "vote_count": 675
      },
      {
        "adult": false,
        "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
        "genre_ids": [27, 53, 9648],
        "id": 1034541,
        "original_language": "en",
        "original_title": "Terrifier 3",
        "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
        "popularity": 2813.154,
        "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
        "release_date": "2024-10-09",
        "title": "Terrifier 3",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 909
      },
      {
        "adult": false,
        "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
        "genre_ids": [18, 28, 27],
        "id": 1118031,
        "original_language": "es",
        "original_title": "Apocalipsis Z: el principio del fin",
        "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
        "popularity": 2561.355,
        "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
        "release_date": "2024-10-04",
        "title": "Apocalypse Z: The Beginning of the End",
        "video": false,
        "vote_average": 6.788,
        "vote_count": 397
      },
      {
        "adult": false,
        "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
        "genre_ids": [16, 878, 10751],
        "id": 1184918,
        "original_language": "en",
        "original_title": "The Wild Robot",
        "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        "popularity": 2050.517,
        "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        "release_date": "2024-09-12",
        "title": "The Wild Robot",
        "video": false,
        "vote_average": 8.488,
        "vote_count": 2748
      },
      {
        "adult": false,
        "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
        "genre_ids": [28, 35, 878],
        "id": 533535,
        "original_language": "en",
        "original_title": "Deadpool & Wolverine",
        "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        "popularity": 2060.103,
        "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        "release_date": "2024-07-24",
        "title": "Deadpool & Wolverine",
        "video": false,
        "vote_average": 7.702,
        "vote_count": 5253
      },
      {
        "adult": false,
        "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
        "genre_ids": [18, 27, 878],
        "id": 933260,
        "original_language": "en",
        "original_title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        "popularity": 1676.118,
        "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "release_date": "2024-09-07",
        "title": "The Substance",
        "video": false,
        "vote_average": 7.297,
        "vote_count": 1831
      },
      {
        "adult": false,
        "backdrop_path": "/zViRwl3ySscZnbXZJ2Q9wq3SeUG.jpg",
        "genre_ids": [16, 878, 12, 10751],
        "id": 698687,
        "original_language": "en",
        "original_title": "Transformers One",
        "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
        "popularity": 1468.358,
        "poster_path": "/qrwI2T844nrBUv3eDwQZRDdgSFs.jpg",
        "release_date": "2024-09-11",
        "title": "Transformers One",
        "video": false,
        "vote_average": 8.091,
        "vote_count": 656
      },
      {
        "adult": false,
        "backdrop_path": "/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg",
        "genre_ids": [28, 12],
        "id": 558449,
        "original_language": "en",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "popularity": 1333.762,
        "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "release_date": "2024-11-13",
        "title": "Gladiator II",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 64
      },
      {
        "adult": false,
        "backdrop_path": "/6vn6K9oX82i6E86ZiHVxqVEMQqP.jpg",
        "genre_ids": [878, 27],
        "id": 945961,
        "original_language": "en",
        "original_title": "Alien: Romulus",
        "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
        "popularity": 1241.065,
        "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        "release_date": "2024-08-13",
        "title": "Alien: Romulus",
        "video": false,
        "vote_average": 7.256,
        "vote_count": 2250
      },
      {
        "adult": false,
        "backdrop_path": "/9s9o9RT9Yj6nDuRJjnJm78WFoFl.jpg",
        "genre_ids": [28, 27, 53, 878],
        "id": 1051896,
        "original_language": "en",
        "original_title": "Arcadian",
        "overview": "In the near future, on a decimated Earth, Paul and his twin sons face terror at night when ferocious creatures awaken. When Paul is nearly killed, the boys come up with a plan for survival, using everything their father taught them to keep him alive.",
        "popularity": 1104.554,
        "poster_path": "/spWV1eRzlDxvai8LbxwAWR0Vst4.jpg",
        "release_date": "2024-04-12",
        "title": "Arcadian",
        "video": false,
        "vote_average": 6,
        "vote_count": 424
      },
      {
        "adult": false,
        "backdrop_path": "/6VoxDupaW2VXfLtJyeOoGCgXSjD.jpg",
        "genre_ids": [28, 53],
        "id": 1116490,
        "original_language": "en",
        "original_title": "Cash Out",
        "overview": "Criminal mastermind Mason is about to execute the score of a lifetime when his lover and key member of his crew, Decker, takes the team down and reveals she’s an undercover Interpol agent. Heartbroken, Mason escapes and retires from the life of crime until his younger brother Shawn is out of his league taking on a big bank heist all on his own. Mason has no choice left but to come to the rescue, while Interpol brings Decker in hoping to unnerve him. Before the SWAT teams storm the bank, Mason must use every tool in his arsenal to not only escape with the prize, but also the love of his life.",
        "popularity": 1126.64,
        "poster_path": "/xBJnIvRdL0nDHgvivr6EgBQizes.jpg",
        "release_date": "2024-04-26",
        "title": "Cash Out",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 92
      },
      {
        "adult": false,
        "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
        "genre_ids": [28, 35, 14],
        "id": 845781,
        "original_language": "en",
        "original_title": "Red One",
        "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
        "popularity": 1146.666,
        "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        "release_date": "2024-10-31",
        "title": "Red One",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 88
      },
      {
        "adult": false,
        "backdrop_path": "/llIXQAndg5kB6SWlp6ouUdO7Zxd.jpg",
        "genre_ids": [28, 12, 18, 36, 10749, 53],
        "id": 1084736,
        "original_language": "fr",
        "original_title": "Le Comte de Monte-Cristo",
        "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
        "popularity": 941.742,
        "poster_path": "/zw4kV7npGtaqvUxvJE9IdqdFsNc.jpg",
        "release_date": "2024-06-28",
        "title": "The Count of Monte-Cristo",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 803
      },
      {
        "adult": false,
        "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        "genre_ids": [878, 28],
        "id": 335983,
        "original_language": "en",
        "original_title": "Venom",
        "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        "popularity": 824.7,
        "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        "release_date": "2018-09-28",
        "title": "Venom",
        "video": false,
        "vote_average": 6.835,
        "vote_count": 15935
      },
      {
        "adult": false,
        "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
        "genre_ids": [16, 10751, 35, 28],
        "id": 519182,
        "original_language": "en",
        "original_title": "Despicable Me 4",
        "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
        "popularity": 819.146,
        "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
        "release_date": "2024-06-20",
        "title": "Despicable Me 4",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 2140
      },
      {
        "adult": false,
        "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        "genre_ids": [878, 28, 12],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 741.63,
        "poster_path": "/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 6.799,
        "vote_count": 10159
      },
      {
        "adult": false,
        "backdrop_path": "/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg",
        "genre_ids": [53, 12, 28, 878],
        "id": 1196470,
        "original_language": "fr",
        "original_title": "Survivre",
        "overview": "A couple celebrates their son’s birthday in the middle of the ocean on their boat. A violent storm hits and it brings up hungry creatures from the depths and they fight for their survival.",
        "popularity": 713.208,
        "poster_path": "/7fR3KxswtY8OHHZuOUB9td58CRX.jpg",
        "release_date": "2024-06-19",
        "title": "Survive",
        "video": false,
        "vote_average": 5,
        "vote_count": 43
      },
      {
        "adult": false,
        "backdrop_path": "/1aOPPkXASkd2By3EKIw66Ilx5qF.jpg",
        "genre_ids": [28, 53],
        "id": 1094974,
        "original_language": "en",
        "original_title": "Take Cover",
        "overview": "A burned-out professional sniper finds himself trapped in an all-glass penthouse by a lethal competitor and must find a way to survive and escape with little to no cover between him and the killer.",
        "popularity": 690.172,
        "poster_path": "/xNLiMNyFzKTL9PVIEulG55Hei8j.jpg",
        "release_date": "2024-10-04",
        "title": "Take Cover",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 48
      },
      {
        "adult": false,
        "backdrop_path": "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg",
        "genre_ids": [18, 80, 53],
        "id": 889737,
        "original_language": "en",
        "original_title": "Joker: Folie à Deux",
        "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
        "popularity": 721.209,
        "poster_path": "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
        "release_date": "2024-10-01",
        "title": "Joker: Folie à Deux",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 1526
      },
      {
        "adult": false,
        "backdrop_path": "/begseNUKhZcc05Bc1UggaX5GeES.jpg",
        "genre_ids": [28, 53, 80],
        "id": 976734,
        "original_language": "en",
        "original_title": "Canary Black",
        "overview": "Top level CIA agent Avery Graves is blackmailed by terrorists into betraying her own country to save her kidnapped husband. Cut off from her team, she turns to her underworld contacts to survive and help locate the coveted intelligence that the kidnappers want.",
        "popularity": 644.358,
        "poster_path": "/hhiR6uUbTYYvKoACkdAIQPS5c6f.jpg",
        "release_date": "2024-10-10",
        "title": "Canary Black",
        "video": false,
        "vote_average": 6.316,
        "vote_count": 223
      }
    ]
  const [results,setResults]=useState([])
  const [page,setPage]=useState(1)
 

  Home.defaultProps={
    pageSize:6,
    category:'general',
  }
  Home.PropTypes={
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  
  useEffect( async()=>{
    
    let api=`https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&page=1`
    let data=await fetch(api);
    let parsed=await data.json();
    console.log(parsed)    
    setResults(parsed.results)
    return ()=>{
      
    }
  },[])
 

  // functions
  const handleOnPre= async ()=>{
    
      let api=`https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&page=${state.page-1}`
      let data=await fetch(api);
      let parsed=await data.json();
      console.log(parsed)    
      setResults(parsed.results)
      setPage(page-1);
    
    
  }

  const handleOnNext= async()=>{
    if (state.page+1 >= Math.ceil(state.totalResults/props.pageSize)) {
      
    }
    else{
      let api=`https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&page=${state.page+1}`
      let data=await fetch(api);
      let parsed=await data.json();
      console.log(parsed)    
      setResults(parsed.results)
      setPage(page+1);

    }
    
  }
  
   
    return (
      <div className="container">
        <div className='row '>
        <h1>news</h1>
        {state.results && state.results.map((element)=>{
        return <div className="col-lg-4 my-2" key={element.id}>
        <Card  title={element.original_title} des={element.overview} img={element.poster_path} newurl={element.release_date}/>
    </div>
          
        })}
      <div className="container d-flex justify-content-between my-3">
        <button disabled={page<=1} type='button' className='btn btn-success' onClick={handleOnPre}>Previous</button>
        <button type='button' className='btn btn-success' onClick={handleOnNext}>Next</button>
      </div>
    
  </div>
  </div>
    )
  
}

