import { Header } from "./Header";
import { ArticlesPage } from "./ArticlesPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ArticlesPage />
      <Footer />
    </div >
  )
}

export default App;