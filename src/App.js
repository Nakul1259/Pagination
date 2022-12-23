import { useEffect, useState } from "react";
import "./App.css";
import Followers from "./Followers";
import { useFetch } from "./useFetch";

function App() {

  const {data, loading} = useFetch();
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])


  useEffect(() => {
    if(loading) return
    setFollowers(data[page])
  },[loading, page])


  const handlePage = (index) => {
    setPage(index)
  }
  
  console.log(data)
  
  
  
  return (
    <main>
    <div className="title">
      <h1>{`${loading ? "Loading..." : "Pagination"}`}</h1>
      <div className="underline"></div>
    </div>

    <section className="profile-container">
      {followers.map((follower) => {
        return <Followers key={follower.id} {...follower}/>
      })}
    </section>
    <section className="pages">
       {data.map((item, index) => {
         return (
           <button
             key={index}
             className={`page-btn ${index === page ? 'active' : null}`}
             onClick={() => handlePage(index)}
           >
             {index + 1}
           </button>
         );
       })}
     </section>
  </main>
);

}

export default App;












// const { loading, data } = useFetch();
// const [page, setPage] = useState(0);
// const [followers, setFollowers] = useState([]);

// useEffect(() => {
//   if (loading) return;
//   setFollowers(data[page]);
// }, [loading, page]);

// const handlePage = (index) => {
//   setPage(index);
// };

// return (
//   <main>
//     <div className="title">
//       <h1>{`${loading ? "Loading..." : "Pagination"}`}</h1>
//       <div className="underline"></div>
//     </div>

//     <section className="profile-container">
//       {followers.map((follower) => {
//         return <Followers key={follower.id} {...follower} />;
//       })}
//     </section>
//     <section className="pages ">
//       {data.map((item, index) => {
//         return (
//           <button
//             key={index}
//             className={`page-btn ${index === page ? 'active' : null}`}
//             onClick={() => handlePage(index)}
//           >
//             {index + 1}
//           </button>
//         );
//       })}
//     </section>
//   </main>
// );
