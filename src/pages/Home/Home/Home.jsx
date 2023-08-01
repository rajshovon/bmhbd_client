import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button.jsx';

const Home = () => {
    return (
        <div>
            this is home pages
            <Link to="/login"><Button btnText={'Login'} /></Link>
        </div>
    );
};

export default Home;