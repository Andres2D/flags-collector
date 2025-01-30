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
          onClick={() => navigate('/guess-by-name')}  
        >Guess by Flag</button>
        <button
          onClick={() => navigate('/guess-by-name')}  
        >Color the Flag</button>
        <button
          onClick={() => navigate('/guess-by-name')}  
        >Guess By Map</button>
        <button
          onClick={() => navigate('/guess-by-name')}  
        >Random</button>
      </div>
    </section>
  ) 
}

export default Menu;
