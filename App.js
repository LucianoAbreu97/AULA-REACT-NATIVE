import {View, Text, StyleSheet,StatusBar,VirtualizedList} from 'react-native'

const DATA = [];

const getItems = (data,index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
})

const getItemsCount = (data) => 100;

const Item  = ({title}) => (
  <View style={estilos.item}>
    <Text style={estilos.title}>{title}</Text>
  </View>
);

const App = () =>{
  return (
    <View style={estilos.janela}>
      <VirtualizedList 
        data={DATA}
        initialNumToRender = {4}
        renderItem = {({item}) => <Item  title = {item.title}/>}
        keyextractor = {item =>item.key}
        getItemCount = {getItemsCount}
        getItem = {getItems}
      />
    
    </View>
  )
}

const estilos = StyleSheet.create({
  janela: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  item:{
    backgroundColor: 'yellow',
    height: 50,
    marginVertical: 8,
    marginHorizontal: 10,
    justifyContent: 'center',
    padding: 10
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'dimgrey'
    
  }
})



export default App;