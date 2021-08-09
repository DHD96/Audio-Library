import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import FocusCard from '../components/FocusCard/FocusCard';
import Cards from '../containers/Cards/cards';

const Router = ({cards}) => {
    return (
    <div>
        <Route exact path='/audioLibrary' render={() => <Cards cardData={cards} />} ></Route>
        <Route path='/signIn' render={() => <SignIn></SignIn>}></Route>
        <Route path='/focusCard' render={(cardData) => <FocusCard {...cardData}></FocusCard>}></Route>
    </div>)
}

export default Router;