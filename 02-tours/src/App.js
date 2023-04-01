import React, {useState, useEffect} from "react";
import Tours from "./Tours";
import Loading from "./Loading ";

function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://course-api.com/react-tours-project';

  const fetchTours = async () => {
      setLoading(true);
      try {
          const response = await fetch(url);
          const tours = await response.json();
          setLoading(false);
          setTours(tours);

      } catch(error) {
          setLoading(false);
          console.log(error);
      }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading) {
     return (
      <main>
          <Loading />
      </main>
     )
  }

  if(tours.length === 0 ){
      return (
        <main>
          <div className="title">
              <h2>No tours left</h2>
              <button className="btn" onClick={() => fetchTours()}> Refresh </button>
          </div>
        </main>
      )
  }


  const removeTour = (id) => {
      let newTour = tours.filter((tour) => 
          tour.id !== id
      )
      setTours(newTour);
  }


  return (
      <main>
          <Tours tours={tours} removeTour={removeTour}/>
      </main>
  );
}

export default App;
