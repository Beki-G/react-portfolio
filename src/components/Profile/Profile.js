import React from "react";
import "./styles.css";

function Profile() {
  return (
    <section>
      <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
          style={{ maxWidth: "500px" }}
        >
          <div class="w-full pt-1 pb-5">
            <div class="overflow-hidden rounded-full w-40 h-40 -mt-16 mx-auto shadow-lg">
              <img src={require("../../assets/0.jpg")} alt="Beki's Profile" />
            </div>
          </div>
          <div class="w-full mb-10">
            {/* <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div> */}
            <br />
            <p class="text-sm text-gray-600 text-center px-5">
              Full Stack Developer with administrative and customer service
              background to design and build effective and efficient web
              applications. Certificate in Full-Stack web development from the
              University of Oregon, with skills in JavaScript, HTML, CSS. A
              passionate, collaborative, and curious mindset to learn and apply
              new concepts quickly. For each project, I bring an attentive eye
              to details and a systematic approach to create and execute new
              solutions. Worked on a team to build a website to filter character
              traits from a game for other players to use as the sole web
              developer. Open and eager to utilize my skills in software and web
              development.
            </p>
            {/* <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div> */}
          </div>
          <div class="w-full">
            <p class="text-md text-yellow-400 font-bold text-center">
              Beki Gonzalez
            </p>
            <p class="text-xs text-gray-500 text-center">Twitter @BekiGonzalez4</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;