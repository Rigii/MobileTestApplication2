import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {COLORS} from '../../constants/theme';
import {ICONS} from '../../constants/icons';
import {NavigationInjectedProps} from 'react-navigation';
import {ROUTES} from '../../constants/routes';
import {TypesTodoList} from './todo.reducer';

interface TypeTodoItem {
  itemParams: TypesTodoList;
}

export const TodoItem = (props: TypeTodoItem & NavigationInjectedProps) => {

  const {location, photoUrl, video} = props.itemParams;
  const iconsArr = [
    {icon: ICONS.location, data: location.length},
    {icon: ICONS.photo, data: photoUrl.length},
    {icon: ICONS.video, data: video.length},
  ]

  const navigate = () => {
    props.navigation.navigate(ROUTES.DisplayItemData, {
      itemParams: props.itemParams,
    });
  };

  return (
    <TouchableOpacity onPress={navigate} style={styles.task_view}>
      <Text style={styles.text}>{props.itemParams.title}</Text>
      <View style={styles.icon_cont}>
        {iconsArr.map((props) => {
          return props.data > 0 ? (
            <View style={styles.images}>
              <SvgUri width="15" height="15" source={props.icon} />
            </View>
          ) : null
        })}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  icon_cont: {
    flexDirection: 'row',
    right: 0,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 14,
  },
  images: {
    width: 25,
    height: 25,
    margin: 5,
    backgroundColor: COLORS.main,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.border_but_color,
    borderWidth: 1,
  },
});
