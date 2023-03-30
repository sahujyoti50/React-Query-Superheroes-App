import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/Home.page';
import { SuperHeroesPage } from './Components/SuperHeroes.page';
import { RQSuperHeroPage } from './Components/RQSuperHeroes.page';
import { Navigation } from './Components/Navigation';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RQSuperHero } from './Components/RQSuperHero';
import { ParallelRQPage } from './Components/ParallelRQPage';
import { DynamicParallelQuery } from './Components/DynamicParallelQuery';
import { DependentQuery } from './Components/DependentQuery.page';
import { PaginatedQueriesPage } from './Components/PaginatedQueries.page';
import { InfiniteQueriesPage } from './Components/InfiniteQuery';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navigation />
        <div>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage />}></Route>
            <Route path='/rq-super-heroes' element={<RQSuperHeroPage />}></Route>
            <Route path='/rq-infinite' element={<InfiniteQueriesPage />}></Route>
            <Route path="/dependent" element={<DependentQuery email={"vishwas@example.com"} />}></Route>
            <Route path="/pagination" element={<PaginatedQueriesPage />}></Route>
            <Route path='/' element={<HomePage />}></Route>
            <Route path="/rq-super-hero/:id" element={<RQSuperHero />}></Route>
            <Route path="/parallel-rq" element={<ParallelRQPage />}></Route>
            <Route path="/dynamic-parallel-query" element={<DynamicParallelQuery heroIds={[1, 3]} />}></Route>
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
