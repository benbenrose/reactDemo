/**
 * Created by lili on 2016/11/11.
 */
import React from 'react';
import {Link} from 'react-router';
import './css/style.css';
import lily from './images/lily.png'

export default React.createClass({
    render(){
      return (
          <div>
            <div className="main-nav">
                <div className="ico-box"><img src={lily} className="img-width"></img></div>
                <ul className="list-box">
                    <li className="list-li"><Link activeClassName="active" to="/" onlyActiveOnIndex>userList</Link></li>
                    <li className="list-li"><Link activeClassName="active" to="/addUser">addUser</Link></li>
                    <li className="list-li"><Link activeClassName="active" to="/starGirl">starGirl</Link></li>
                    <li className="list-li"><Link activeClassName="active" to="/gallery">gallery</Link></li>
                </ul>
            </div>
            <div className="main-body">
                {this.props.children}
                <div className="main-right-box">
                    <span>CopyRight ?lily 2016- all right reserved</span>
                </div>
            </div>
          </div>
      );
    }
});