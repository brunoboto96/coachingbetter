import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, FlatList, Alert, Modal, TouchableHighlight, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import { Button, Row, Card, CardItem, Body, H2, Right } from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      program: 'Body Workout',
      session_number: 1
    }


  }


  render() {

    const { data, isLoading } = this.state;
    const { navigate } = this.props.navigation;


    let sets = [];
    for (let i = 0; i < this.state.addSetsCounter; i++) {
      sets.push(<AddSet key="AddSet-{i}" />);
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerMain}>

          <Card>
            <CardItem>
              <Body>
                <Row>
                  <FontAwesome5 name="archive" size={30} color="orange" />
                  <H2 style={{ marginLeft: 50 }}> Program</H2>
                </Row>

                <Picker
                  selectedValue={this.state.program}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ program: itemValue })
                  }>
                  <Picker.Item label="Body Workout" value="Body Workout" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Row>
                  <FontAwesome5 name="cubes" size={30} color="orange" />
                  <H2 style={{ marginLeft: 50 }}> Session {this.state.session_number}</H2>
                </Row>
                <CardItem>
                  <Text>Title </Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={session_title => this.setState({ session_title })}
                    value={this.state.session_title} placeholder="Leg Workout"
                  />
                </CardItem>
                <AddSet />
                <View>
                  <Button success block style={styles.contentContainer}
                    onPress={() => {
                      this.setState({ addSetsCounter: this.state.addSetsCounter });
                      console.log(this.state.addSetsCounter)
                      //console.log(this.state.session_title)
                    }}
                    title={"add more"}
                  ><Text>Add More</Text></Button>
                </View>
                <Button success block style={styles.contentContainer} onPress={() => navigate('NewProgram')} >
                  <Text style={styles.center} >Create Program</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Body>
                <Row>
                  <FontAwesome5 name="archive" size={30} color="orange" />
                  <H2 style={{ marginLeft: 50 }}> Your Programs</H2>
                </Row>
                <CardItem>
                  <FontAwesome5 active name="google-plus" size={50} />
                  <Text> Google Plus</Text>
                  <Right>
                    {/* FIX W add style sheet seperate file */}
                    <FontAwesome5 name="edit" />
                  </Right>
                </CardItem>


                <View style={{ flex: 1, padding: 24 }}>
                  {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                      data={data}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                        <CardItem>
                          <FontAwesome5 active name="users" size={50} />
                          <Text>{item.title}</Text>
                          <Right>
                            {/* FIX W add style sheet separate file */}
                            <FontAwesome5 name="edit" />
                          </Right>
                          <Text>{item.description}</Text>
                        </CardItem>
                      )}
                    />
                  )}
                </View>
              </Body>
            </CardItem>
          </Card>

        </ScrollView>
      </View>
    );
  }
}

const AddSet = () => {
  return (
    <Text>Hello</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  center: {
    marginHorizontal: 'auto',
  },
  contentContainer: {
    marginTop: 30,
  },
  contentContainerMain: {
    padding: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
