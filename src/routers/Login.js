import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
      console.log(err);
    }
  };

  return (
    <div>
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Welcome SURF-LOVERS</h1>
        <form onSubmit={handleSubmit} className="champ">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center" className='palcebtn'>
            {/* <button type="submit" className="button">
              <span>Start Here</span>
            </button> */}
            <Link to="/Home" className="btn">Start Here</Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    <Footer />
    </div>

  );
};

export default Login;