import React from 'react';
import {Button, ButtonGroup} from '@shopify/polaris';

function EditButton(){
    const path = window.location.pathname;
    if(path == '/'){
        return(
            <ButtonGroup>
                <Button url='/settings'>Settings</Button>
                <Button url='/instructions'>Instructions</Button>
            </ButtonGroup>
        );
    }else if(path == '/settings'){
        return(
            <ButtonGroup>
                <Button url='/'>List Reviews</Button>
                <Button url='/instructions'>Instructions</Button>
            </ButtonGroup>
        );
    }else if(path == '/instructions'){
        return(
            <ButtonGroup>
                <Button url='/'>List Reviews</Button>
                <Button url='/settings'>Settings</Button>
            </ButtonGroup>
        );
    }
}

const Nav = () => {
    return (
        <div style={{float: 'right'}}>
                <EditButton />
        </div>
    );
}

export default Nav;