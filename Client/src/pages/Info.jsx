import React, { useState } from 'react';
import './Info.css';

function Info() {
  const movies = [
    {
      name: 'Dr. No',
      info: (
        <>
          <h2>Dr. No</h2>
          <p>1962 | 1h 50min | PG</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.2/10</p>
          <p>
            A resourceful British government agent seeks answers in a case involving the disappearance of a colleague and the disruption of the American space program.
          </p>
          <p><strong>Director:</strong> Terence Young</p>
          <p><strong>Stars:</strong> Sean Connery, Ursula Andress, Bernard Lee</p>
        </>
      ),
      youtubeId: 'pw61uyA0F8A'
    },
    {
      name: 'From Russia With Love',
      info: (
        <>
          <h2>From Russia With Love</h2>
          <p>1963 | 1h 55min | PG</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.3/10</p>
          <p>
            Sean Connery, Martine Beswick, Daniela Bianchi, Robert Shaw, Lisa Guiraut, and Aliza Gur in From Russia with Love (1963)
          </p>
          <p>James Bond willingly falls into an assassination plot involving a naive Russian beauty in order to retrieve a Soviet encryption device that was stolen by the organization Spectre.</p>
          <p><strong>Director:</strong> Terence Young</p>
          <p><strong>Stars:</strong> Sean Connery, Robert Shaw, Lotte Lenya</p>
        </>
      ),
      youtubeId: '9EHiS0dU5GI'
    },
    {
      name: 'Goldfinger',
      info: (
        <>
          <h2>Goldfinger</h2>
          <p>1964 | 1h 50min | Approved</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.7/10</p>
          <p>
            Sean Connery, Honor Blackman, and Shirley Eaton in Goldfinger (1964)
          </p>
          <p>While investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve.</p>
          <p><strong>Director:</strong> Guy Hamilton</p>
          <p><strong>Stars:</strong> Sean Connery, Gert Fröbe, Honor Blackman</p>
        </>
      ),
      youtubeId: 'MA65V-oLKa8?si'
    },
    {
      name: 'License to Kill',
      info: (
        <>
          <h2>Licence to Kill</h2>
          <p>1989 | 2h 13min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 6.7/10</p>
          <p>
            Carey Lowell, Talisa Soto, Timothy Dalton, and Robert Davi in Licence to Kill (1989)
          </p>
          <p>A vengeful James Bond goes rogue to infiltrate and take down the organization of a drug lord who has murdered his friend's new wife and left him near death.</p>
          <p><strong>Director:</strong> John Glen</p>
          <p><strong>Stars:</strong> Timothy Dalton, Robert Davi, Carey Lowell</p>
        </>
      ),
      youtubeId: 'quHQAuO0lkg'
    },
    {
      name: 'GoldenEye',
      info: (
        <>
          <h2>GoldenEye</h2>
          <p>1995 | 2h 10min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.2/10</p>
          <p>
            Pierce Brosnan, Famke Janssen, and Izabella Scorupco in GoldenEye (1995)
          </p>
          <p>When a powerful secret defense system is stolen, James Bond is assigned to stop a Russian crime syndicate from using it.</p>
          <p><strong>Director:</strong> Martin Campbell</p>
          <p><strong>Stars:</strong> Pierce Brosnan, Sean Bean, Izabella Scorupco</p>
        </>
      ),
      youtubeId: '8Zw8ylP4buA'
    },
    {
      name: 'Tomorrow Never Dies',
      info: (
        <>
          <h2>Tomorrow Never Dies</h2>
          <p>1997 | 1h 59min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 6.5/10</p>
          <p>
            Pierce Brosnan, Teri Hatcher, Jonathan Pryce, Michelle Yeoh, Judi Dench, Desmond Llewelyn, and Cecilie Thomsen in Tomorrow Never Dies (1997)
          </p>
          <p>James Bond sets out to stop a media mogul's plan to induce a war between China and the United Kingdom.</p>
          <p><strong>Director:</strong> Roger Spottiswoode</p>
          <p><strong>Stars:</strong> Pierce Brosnan, Jonathan Pryce, Michelle Yeoh</p>
        </>
      ),
      youtubeId: 'eqrk7-mx2D0'
    },
    {
      name: 'Die Another Day',
      info: (
        <>
          <h2>Die Another Day</h2>
          <p>2002 | 2h 13min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 6.1/10</p>
          <p>
            Pierce Brosnan and Halle Berry in Die Another Day (2002)
          </p>
          <p>James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon.</p>
          <p><strong>Director:</strong> Lee Tamahori</p>
          <p><strong>Stars:</strong> Pierce Brosnan, Halle Berry, Rosamund Pike</p>
        </>
      ),
      youtubeId: 'GTznf1x4khc'
    },
    {
      name: 'Casino Royale',
      info: (
        <>
          <h2>Casino Royale</h2>
          <p>2006 | 2h 24min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 8.0/10</p>
          <p>
            Daniel Craig in Casino Royale (2006)
          </p>
          <p>
            After earning a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, in Montenegro.
          </p>
          <p><strong>Director:</strong> Martin Campbell</p>
          <p><strong>Stars:</strong> Daniel Craig, Eva Green, Judi Dench</p>
        </>
      ),
      youtubeId: 'UqIcnyHi4n0'
    },
    {
      name: 'Quantum of Solace',
      info: (
        <>
          <h2>Quantum of Solace</h2>
          <p>2008 | 1h 46min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 6.5/10</p>
          <p>
            Daniel Craig and Olga Kurylenko in Quantum of Solace (2008)
          </p>
          <p>James Bond tries to stop an organisation from eliminating a country's most valuable resource.</p>
          <p><strong>Director:</strong> Marc Forster</p>
          <p><strong>Stars:</strong> Daniel Craig, Olga Kurylenko, Mathieu Amalric</p>
        </>
      ),
      youtubeId: 'BBqYaFEWBxI'
    },
    {
      name: 'Skyfall',
      info: (
        <>
          <h2>Skyfall</h2>
          <p>2012 | 2h 23min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.8/10</p>
          <p>
            Daniel Craig in Skyfall (2012)
          </p>
          <p>James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.</p>
          <p><strong>Director:</strong> Sam Mendes</p>
          <p><strong>Stars:</strong> Daniel Craig, Javier Bardem, Naomie Harris</p>
        </>
      ),
      youtubeId: '6kw1UVovByw'
    },
    {
      name: 'Spectre',
      info: (
        <>
          <h2>Spectre</h2>
          <p>2015 | 2h 28min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 6.8/10</p>
          <p>
            Daniel Craig in Spectre (2015)
          </p>
          <p>James Bond's investigation into the mysterious organisation Spectre uncovers a sinister connection to his own past.</p>
          <p><strong>Director:</strong> Sam Mendes</p>
          <p><strong>Stars:</strong> Daniel Craig, Christoph Waltz, Léa Seydoux</p>
        </>
      ),
      youtubeId: '7GqClqvlObY'
    },
    {
      name: 'No Time to Die',
      info: (
        <>
          <h2>No Time to Die</h2>
          <p>2021 | 2h 43min | PG-13</p>
          <p>Genres: Action, Adventure, Thriller</p>
          <p>IMDb Rating: 7.5/10</p>
          <p>
            Daniel Craig in No Time to Die (2021)
          </p>
          <p>James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.</p>
          <p><strong>Director:</strong> Cary Joji Fukunaga</p>
          <p><strong>Stars:</strong> Daniel Craig, Ana de Armas, Rami Malek</p>
        </>
      ),
      youtubeId: 'BIhNsAtPbPI'
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (index) => {
    setSelectedMovie(movies[index]);
  };

  return (
    <div className="info-container">
      <div className="movie-links">
        <ul>
          {movies.map((movie, index) => (
            <li key={index} onClick={() => handleMovieClick(index)}>
              {movie.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="movie-info">
          {selectedMovie ? (
            <>
              {selectedMovie.info}
              {selectedMovie.youtubeId && (
                <div className="youtube-video">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${selectedMovie.youtubeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                  ></iframe>
                </div>
              )}
            </>
          ) : (
            <p>Select a movie from the list to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
