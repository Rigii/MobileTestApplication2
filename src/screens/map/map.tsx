import React, {Component} from 'react';
import MapView, { Region } from 'react-native-maps'
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export class LocationMap extends Component<any, Region> { 
    
    public state = {
            latitude: 0,          
            longitude: 0,
            latitudeDelta: 0.0922,          
            longitudeDelta: 0.0421 
        }
    
componentDidMount(){
    this.getCurrentLocation()
}

getCurrentLocation = () => {
    let getInfoSucces = (info: GeolocationResponse) => this.setState({latitude: info.coords.latitude, longitude: info.coords.longitude});
    let getInfoErr = () => console.log('Coords request failed')
    Geolocation.getCurrentPosition(getInfoSucces, getInfoErr);
};

zoomIn = () => {
    let latDeltaNext = this.state.latitudeDelta - 0.01;
    let longDeltaNext = this.state.longitudeDelta - 0.01;
    latDeltaNext > 0  && longDeltaNext > 0 ? this.setState({ latitudeDelta: latDeltaNext - 0.01, longitudeDelta: longDeltaNext}) : null;
}

zoomOut = () => {
    this.setState({ latitudeDelta: this.state.latitudeDelta + 0.01, longitudeDelta: this.state.longitudeDelta + 0.01 })
}

render(){
        return (   
            <View style={styles.container}>   
            <MapView      
            style={styles.preview}       
            region={{          
            latitude: this.state.latitude,          
            longitude: this.state.longitude,          
            latitudeDelta: this.state.latitudeDelta,          
            longitudeDelta: this.state.longitudeDelta       
        }}        
        showsMyLocationButton
        showsUserLocation={true}
        //enableZoomControl={true}
        zoomTapEnabled={true}/> 
        <View style={styles.buttonsCont}>
        <TouchableOpacity style={styles.buttons} onPress={this.zoomIn}><Text style={{alignSelf: 'center', fontSize: 14}}> + </Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.zoomOut}><Text style={{alignSelf: 'center', fontSize: 14}}> - </Text></TouchableOpacity>
        </View>
        </View>
        );
    }}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'black',
          },
          preview: {
            flex: 1,
            alignItems: 'center',
          },
        buttonsCont: { 
            position: 'absolute', 
            justifyContent: 'space-around',
            flexDirection: 'row',
            bottom: 5
        },
        buttons: { 
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 5,
            padding: 15,
            paddingHorizontal: 20,
            alignSelf: 'center',
            margin: 20,
            opacity: 0.5 
        }
    })

 