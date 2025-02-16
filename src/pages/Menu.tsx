import { useNavigate } from "react-router";

function Menu() {

  const navigate = useNavigate();

  return (
    <section>
      <h1>Menu</h1>
      <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={() => navigate('/guess-by-name')}  
        >Guess by Name</button>
        <button
          onClick={() => navigate('/guess-by-flag')}  
        >Guess by Flag</button>
        <button
          onClick={() => navigate('/color-the-flag')}  
        >Color the Flag</button>
        <button
          onClick={() => navigate('/')}  
        >Guess By Map</button>
        <button
          onClick={() => navigate('/guess-by-name')}  
        >Random</button>
      </div>

      <br /><br /><br /><br />

      <h2 className='gamemode-title'>Select game mode</h2>
        <section className="gamemode-cards">
          <div className="gamemode-card">
            <div className="gmc-section1">
              <h4>Guess by Name</h4>
              <a href="$">Play</a>
            </div>
            <div className="gmc-section2">
              <div className="gmcs-text1">
                <h5>Rules</h5>
                <p>Re-usable components built using Radir UI and Tailwind CSS</p>
              </div>

              <div className="gmcs-text2">
                <h5>Difficulty</h5>
                <p>How to install dependencies and structure your app.</p>
              </div>
            </div>
          </div>

          <div className="gamemode-card">
            <div className="gmc-section1">
              <h4>Guess by Flag</h4>
              <a href="$">Play</a>
            </div>
            <div className="gmc-section2">
              <div className="gmcs-text1">
                <h5>Rules</h5>
                <p>Re-usable components built using Radir UI and Tailwind CSS</p>
              </div>

              <div className="gmcs-text2">
                <h5>Difficulty</h5>
                <p>How to install dependencies and structure your app.</p>
              </div>
            </div>
          </div>

          <div className="gamemode-card">
            <div className="gmc-section1">
              <h4>Color by Flag</h4>
              <a href="$">Play</a>
            </div>
            <div className="gmc-section2">
              <div className="gmcs-text1">
                <h5>Rules</h5>
                <p>Re-usable components built using Radir UI and Tailwind CSS</p>
              </div>

              <div className="gmcs-text2">
                <h5>Difficulty</h5>
                <p>How to install dependencies and structure your app.</p>
              </div>
            </div>
          </div>

          <div className="gamemode-card">
            <div className="gmc-section1">
              <h4>Guess by Map</h4>
              <a href="$">Play</a>
            </div>
            <div className="gmc-section2">
              <div className="gmcs-text1">
                <h5>Rules</h5>
                <p>Re-usable components built using Radir UI and Tailwind CSS</p>
              </div>

              <div className="gmcs-text2">
                <h5>Difficulty</h5>
                <p>How to install dependencies and structure your app.</p>
              </div>
            </div>
          </div>

          <div className="gamemode-card">
            <div className="gmc-section1">
              <h4>Random</h4>
              <a href="$">Play</a>
            </div>
            <div className="gmc-section2">
              <div className="gmcs-text1">
                <h5>Rules</h5>
                <p>Re-usable components built using Radir UI and Tailwind CSS</p>
              </div>

              <div className="gmcs-text2">
                <h5>Difficulty</h5>
                <p>How to install dependencies and structure your app.</p>
              </div>
            </div>
          </div>
        </section>
    </section>
  ) 
}

export default Menu;
