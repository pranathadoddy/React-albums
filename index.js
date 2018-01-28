import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

const App =()=> (
    
    <View style={style.viewStyle}>
       <Header headerText={'Albums!'}/>
        <AlbumList/>   
    </View>
);

const style={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    }
}


AppRegistry.registerComponent('albums', ()=>App);