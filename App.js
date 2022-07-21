import {Provider} from 'react-redux'
import RootNavigation from './src/navigation';
import { store } from './src/redux/store';
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()


export default function App() {
  return (
    <Provider store={store}>
       <QueryClientProvider client={queryClient}>
         <RootNavigation/>
       </QueryClientProvider>
    </Provider>
  );
}
