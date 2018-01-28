import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const AlbumDetail=({album})=>{
    const {title, artist, thumbnail_image, image}=album;
    const {
        thumbnailStyle, 
        headerStyle, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageStyle
    }=styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{uri:thumbnail_image}}/>
                </View>
                <View style={headerStyle}> 
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                style={imageStyle}
                source={{uri:image}}/>
            </CardSection>
        </Card>
    );
}

const styles={
    headerStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
        marginLeft:5,
    },
    headerTextStyle:{
        fontSize:18,
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default AlbumDetail;