import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h2>Home</h2>
            <Link to="/product/1"> Product 1</Link><br />
            <Link to='/product/2'>Product 2</Link>
        </>
    );
}

export default Home;