import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <View>  
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.id }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash-2" style={styles.trashIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" style={styles.plusIcon} />
      </TouchableOpacity>
    ),
  };

}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18,
  },
  trashIcon: {
    fontSize: 24,
    color: 'black',
  },
  plusIcon: {
    fontSize: 30,
    color: 'black',
    marginRight: 10,
  }
});

export default IndexScreen;
