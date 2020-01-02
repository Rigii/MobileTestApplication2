import React, {Component} from 'react';
import MapView, {Region, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {STRINGS} from '../../constants/strings';
import {ROUTES} from '../../constants/routes';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

//import marker from '../../assets/icons/icons8-blue-ui-50.png'

export class LocationMap extends Component<any, any> {
  public state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    view: false,
  };

  public navigationState = this.props.navigation.getParam('itemParams');

  componentDidMount() {
    this.isView();
    this.getCurrentLocation();
  }

  isView = () => {
    this.navigationState.location
      ? this.setState({
          region: this.navigationState.location,
          view: true,
        })
      : null;
  };

  getCurrentLocation = () => {
    let getInfoSucces = (info: GeolocationResponse) =>
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    let getInfoErr = () => console.log('Coords request failed');
    Geolocation.getCurrentPosition(getInfoSucces, getInfoErr);
  };

  zoomIn = () => {
    let latDeltaNext = this.state.region.latitudeDelta - 0.01;
    let longDeltaNext = this.state.region.longitudeDelta - 0.01;
    latDeltaNext > 0 && longDeltaNext > 0
      ? this.setState({
          region: {
            ...this.state.region,
            latitudeDelta: latDeltaNext - 0.01,
            longitudeDelta: longDeltaNext,
          },
        })
      : null;
  };

  zoomOut = () => {
    this.setState({
      region: {
        ...this.state.region,
        latitudeDelta: this.state.region.latitudeDelta + 0.01,
        longitudeDelta: this.state.region.longitudeDelta + 0.01,
      },
    });
  };

  onRegionChange = (region: object) => {
    this.setState({region});
  };

  setCoords = () => {
    //const navigationState = this.props.navigation.getParam('itemParams');
    this.navigationState.setCoords(JSON.stringify(this.state.region));
    this.props.navigation.navigate(ROUTES.AddItem);
  };

  isButtons = () => {
    return !this.state.view ? (
      <View style={styles.buttonsCont}>
        <TouchableOpacity style={styles.buttons} onPress={this.zoomIn}>
          <Text style={{alignSelf: 'center', fontSize: 14}}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.setCoords}>
          <Text style={{alignSelf: 'center', fontSize: 14}}>
            {STRINGS.MAP.saveCoords}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={this.zoomOut}>
          <Text style={{alignSelf: 'center', fontSize: 14}}> - </Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.preview}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
          showsMyLocationButton
          showsUserLocation={true}
          //enableZoomControl={true}
          zoomTapEnabled={true}>
          {
          this.state.view ? (
            <Marker
              coordinate={{
                latitude: this.navigationState.location.latitude,
                longitude: this.navigationState.location.longitude,
              }}
            />
          ) : null}
        </MapView>
        {
        !this.state.view ? (
          <View style={styles.markerFixed}>
            <Image
              style={styles.marker}
              source={require('../../assets/icons/icons8-blue-ui-50.png')}
            />
          </View>
        ) : null}
        {this.isButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
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
    bottom: 5,
  },
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    opacity: 0.5,
  },
});
