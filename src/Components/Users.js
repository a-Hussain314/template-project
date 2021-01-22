import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import {GET_USERS} from "../Actions/index";

function Users(props) {
    useEffect(() => {
      props.GET_USERS();
    }, [])
    return (
        <div>
            <h1>This is Users Component</h1>
            {props.store.users.map((user, index)=>{
                return(
                    <div key={index} className="m-3 p-3">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {store : state};
};

export default connect(mapStateToProps, {GET_USERS}) (Users);
