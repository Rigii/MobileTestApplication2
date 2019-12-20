import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ICONS} from '../../constants/icons';
import {COLORS} from '../../constants/theme';
import {STRINGS} from '../../constants/strings';
import {ROUTES} from '../../constants/routes';
import {deleteItem} from '../todo-list/todo.actions';
import SvgUri from 'react-native-svg-uri';

export const DisplayItemDataComp = (props: any) => {
  
  const navigationState = props.navigation.getParam('itemParams');
  const strings = STRINGS.DISPLAY_ITEM;

  //console.log(navigationState)

  const deleteItem = () => {
    props.navigation.navigate(ROUTES.TodoList);
    props.deleteItem(navigationState.id);
  };

  return (
    <View style={styles.add_item_view}>
      <View style={{alignItems: 'center'}}>
        <Text>{navigationState.title}</Text>
      </View>
      <View style={styles.stucture_comp}>
        <Text>{navigationState.description}</Text>
      </View>
      <View style={[styles.but_container, styles.stucture_comp]}>
        {[ICONS.location, ICONS.photo, ICONS.video].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.button_show}>
          <SvgUri width="30" height="30" source={icon} />
        </TouchableOpacity>
        ))}
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

const mapDispatchToProps = {
  deleteItem,
};

export const DisplayItemData = connect(
  null,
  mapDispatchToProps,
)(DisplayItemDataComp);

const styles = StyleSheet.create({
  add_item_view: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
