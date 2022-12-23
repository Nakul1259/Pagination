import React, { useState } from "react";

function Followers({html_url, avatar_url, login}) {
    return (
      <>
        <div className="profile">
          <img src={avatar_url} alt="" />
          <span>{login}</span>
          <a href={html_url} className="btn">View Profile</a>
        </div>
      </>
    );
  }

export default Followers;































// function Followers({html_url, avatar_url, login}) {
//   return (
//     <>
//       <div className="profile">
//         <img src={avatar_url} alt="" />
//         <span>{login}</span>
//         <a href={html_url} className="btn">View Profile</a>
//       </div>
//     </>
//   );
// }