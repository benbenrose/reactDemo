/**
 * Created by lili on 2016/11/11.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Index from './index';
import UserInfoList from './userMana/userInfoList';
import AddUser from './userMana/addUser';
import StarGirl from './other/starGirl';
import Gallery from './other/galleryOne';

render((<Router history={hashHistory}>
    <Route path="/" component={Index}>
        <IndexRoute component={UserInfoList}/>
        <Route path="/addUser" component={AddUser}/>
        <Route path="/starGirl" component={StarGirl}/>
        <Route path="/gallery" component={Gallery}/>
    </Route>
    </Router>),document.getElementById('content'));