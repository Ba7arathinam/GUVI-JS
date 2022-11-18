import './App.css';

function App() {
  return (
    <div className="App">
        <movies 
        name="LoveToday"
        img="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjg1ZTkwMGItNWFlMi00YThjLTg5MmEtYTg3NWI2NjY0NWI1XkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt22488728%2F&tbnid=Ak3dEKHhX1Ug6M&vet=12ahUKEwjWrfPpmLf7AhVZ_zgGHcVpDGcQMygBegUIARDIAQ..i&docid=oxTmY2tkoVuOSM&w=499&h=680&q=love%20today%20poster&ved=2ahUKEwjWrfPpmLf7AhVZ_zgGHcVpDGcQMygBegUIARDIAQ"
        rating="⭐9.1"
        disc="Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
        />
        <movies 
        name="Diary"
        img="https://www.google.co.in/imgres?imgurl=http%3A%2F%2Fwww.impawards.com%2Fintl%2Findia%2F2021%2Fposters%2Fdiary.jpg&imgrefurl=http%3A%2F%2Fwww.impawards.com%2Fintl%2Findia%2F2021%2Fdiary.html&tbnid=2O41GOIO89v9IM&vet=12ahUKEwjcicHrmbf7AhVAg2MGHRmSDy0QMygBegUIARC8AQ..i&docid=kuEuIWB0ppp7LM&w=521&h=755&q=diary%20movie%20poster&ved=2ahUKEwjcicHrmbf7AhVAg2MGHRmSDy0QMygBegUIARC8AQ"
        rating="⭐8.6"
        disc="Diary is a 2022 Indian Tamil-language supernatural mystery thriller film written and directed by debutant Innasi Pandiyan and produced by S. Kathiresan under the banner of Five Star Creations LLP. The film was distributed by his cousin Udhayanidhi Stalin under his banner Red Giant Movies."
        />
         <movies 
        name="Rorschach"
        img="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2NlMTNkM2EtZmZlNi00YjM0LTlmMTEtNzJkYjAxYzE4MDJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt19886242%2F&tbnid=1L87Xwf80hs7BM&vet=12ahUKEwiDkfavm7f7AhW1yKACHYEuB70QMygHegUIARDDAQ..i&docid=YGolssxNmtQSQM&w=1000&h=1500&q=rorschach%202022%20post&hl=en&ved=2ahUKEwiDkfavm7f7AhW1yKACHYEuB70QMygHegUIARDDAQ"
        rating="⭐7.5"
        disc="Rorschach is a 2022 Indian Malayalam-language neo-noir psychological supernatural action thriller film directed by Nissam Basheer and produced by Mammootty under, Mammootty Kampany. It stars Mammootty, Sharafudheen, Jagadish, Grace Antony, Bindu Panicker, Kottayam Nazeer, Sanju Sivram and Asif Ali"
        />
         <movies 
        name="Thallumaala"
        img="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTU1MjcyMGUtODI3ZS00NTc4LWExNjgtY2ZjZGJlZmUyMmFhXkEyXkFqcGdeQXVyMjkxNzQ1NDI%40._V1_UY1200_CR96%2C0%2C630%2C1200_AL_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt11075264%2Freleaseinfo&tbnid=qnZz7YO4-xKgMM&vet=12ahUKEwiIwOrHm7f7AhVpgGMGHc8MC8QQMygBegUIARDCAQ..i&docid=cxvO4b7lAL8CoM&w=630&h=1200&q=thallumalla%202022%20post&hl=en&ved=2ahUKEwiIwOrHm7f7AhVpgGMGHc8MC8QQMygBegUIARDCAQ"
        rating="⭐8"
        disc="A young, carefree man who's drawn into fights falls in love with a star vlogger, where the impact of his fists could have disastrous effects on his blossoming relationship."
        />

      </div>
 
  );
}

function movies({name,img,disc,rating}) {
  return(
    <div className="movie">
      <h5>
        Love Today💖{movies.name}{movies.img}{movies.disc}{movies.rating}
      </h5>
      </div>

  );
}
export default App;
