import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <NewsList />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
