import React, {useEffect} from 'react';
import { LeftMenu }  from '../../components';
import { TaskArea } from '../../components';

const Container2 = (props) => {

    useEffect(() => {
        return () => {
            props.init();
        }
    });

    return (
        <div className="row Container">
            <LeftMenu />

            <TaskArea />
        </div>
    )

}

export default Container2;