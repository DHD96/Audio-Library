import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import FocusCard from '../components/FocusCard/FocusCard';
import Cards from '../containers/Cards/cards';

const Router = ({ cards }) => {
    return (
        <div>
            <Switch>
                <Route exact path='/audioLibrary' render={() => <Cards cardData={cards} />} />
                <Route path='/signIn' render={() => <SignIn/>}/>
                <Route path='/focusCard/:id' render={() => <FocusCard/>} />
                }
            </Switch>
            <Redirect to='/audioLibrary'/>
        </div>)
}

export default Router;