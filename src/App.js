import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/comments')
      .then(result => result.json())
      .then(comments => this.setState({ comments }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Lista de comentarios:</Text>
        <ScrollView>
          {this.state.comments.map(comment => (
            <View key={comment.id}>
              <Text style={styles.h1}>{comment.title} <Text style={styles.small}>{moment(comment.created_at).fromNow()}</Text></Text>
              <Text>{comment.body}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 22,
  },
  small: {
    fontSize: 12,
    color: 'grey',
  },
})

export default App;
