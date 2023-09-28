import logo from './StoryWeaverLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Under Construction! write to <a href='https://twitter.com/vikkrraant'>vikrant</a> to know more.
        </p>
        <a
          className="App-link"
          href="https://story-weaver-user-pool3.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=3rl50tnb5idj3t7mej3svmlsev&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fs3.amazonaws.com%2Fstory-weaver.net%2Flogin-welcome.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register/signin
        </a>
      </header>
    </div>
  );
}

export default App;
