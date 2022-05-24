import Game from './components/Game';
import { useQuery } from 'react-query';
import { getQuestions } from './utils/getQuestions';
import axios from 'axios';

async function fetchArticles() {
    const data = await axios
        .get('https://restcountries.com/v3.1/all')
        .then((response) => getQuestions(response.data));
    return data;
}

function App() {
    const { data, error, isError, isLoading, refetch } = useQuery(
        'countries',
        fetchArticles
    );

    return (
        <div className="App flex flex-col items-center bg-[url('assets/background.png')] bg-center bg-no-repeat bg-cover h-screen overflow-y-auto overflow-x-hidden font-sans">
            {isLoading ? (
                <div class="sk-chase mt-auto mb-auto">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>
            ) : (
                <>
                    <Game questions={data} refetch={refetch} />
                    <p className="text-white text-center mt-4 mb-2 px-3">
                        created by{' '}
                        <a
                            href="github.com/eAntillon"
                            className="font-semibold"
                        >
                            eAntillon
                        </a>{' '}
                        - devChallenges.io
                    </p>
                </>
            )}
        </div>
    );
}

export default App;
