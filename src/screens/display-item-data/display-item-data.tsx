import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {ICONS} from '../../constants/icons';
import {COLORS} from '../../constants/theme';
import {STRINGS} from '../../constants/strings';
import {ROUTES} from '../../constants/routes';
import {deleteItem} from '../todo-list/todo.actions';
import {delItemData} from '../../services/api-service';
import SvgUri from 'react-native-svg-uri';
import {IStore} from '../../services/redux/reducer';
import {NavigationInjectedProps} from 'react-navigation';

interface IDisplayItemDataComp {
  email: string;
  deleteItem: (id: number) => any;
}

export const DisplayItemDataComp = (
  props: IDisplayItemDataComp & NavigationInjectedProps,
) => {
  const navigationState = props.navigation.getParam('itemParams');
  const strings = STRINGS.DISPLAY_ITEM;

  const iconsArr = [
    {icon: ICONS.location, route: ROUTES.LocationMap, opt: {location: JSON.parse(navigationState.location)}},
    {icon: ICONS.photo, route: '', opt: {}},
    {icon: ICONS.video, route: '', opt: {}},
  ];

  const deleteItem = async () => {
    try {
      await delItemData(
        `/users/${props.email.toLowerCase()}`,
        navigationState.id,
      );
      props.navigation.navigate(ROUTES.TodoList);
      props.deleteItem(navigationState.id);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };
console.log(navigationState)
  return (
    <View style={styles.add_item_view}>
      <View style={{alignItems: 'center'}}>
        <Text>{navigationState.title}</Text>
      </View>

      <View style={styles.stucture_comp}>
        <Image
          style={{width: 86, height: 78}}
          source={{uri: `data:image/png;base64,${navigationState.photoUrl}`}}
        />
      </View>

      <View style={styles.stucture_comp}>
        <Text>{navigationState.description}</Text>
      </View>
      <View style={[styles.but_container, styles.stucture_comp]}>
        {iconsArr.map((obj, index) => {
          return (
            <TouchableOpacity 
            key={index} 
            style={styles.button_show}
            onPress={ () => props.navigation.navigate(obj.route, {itemParams: obj.opt}) }
            >
              <SvgUri width="30" height="30" source={obj.icon} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        testID="delItem"
        style={[styles.but, styles.stucture_comp]}
        onPress={deleteItem}>
        <Text>{strings.del_but}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    email: store.loginReducer.email,
  };
};

const mapDispatchToProps = {
  deleteItem,
};

export const DisplayItemData = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayItemDataComp);

const styles = StyleSheet.create({
  add_item_view: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    margin: 15,
  },
  stucture_comp: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 350,
    height: 40,
    borderColor: COLORS.input_border,
    borderWidth: 1,
    borderRadius: 5,
  },
  input_descript: {
    width: 350,
    height: 350,
    borderColor: COLORS.input_border,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  button_show: {
    backgroundColor: COLORS.main,
    borderRadius: 50,
    padding: 15,
    opacity: 0.5,
    borderColor: COLORS.border_but_color,
  },
  but_container: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    bottom: 10,
  },
  but: {
    flex: 0,
    backgroundColor: COLORS.main,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

// const deleteItem = () => {
//   props.navigation.navigate(ROUTES.TodoList);
//   props.deleteItem(navigationState.id);
// };
