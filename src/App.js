
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import NewsOverview from './components/news-overview/news-overview.component';

function App() {
  return (
    <div>
      <Header />
      <NewsOverview />
      <Footer />
    </div>
  );
}

export default App;
