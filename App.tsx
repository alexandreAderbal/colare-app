import React from 'react';
import Mapbox from '@rnmapbox/maps';
import Provideres from '@/provideres';
// Mapbox.setWellKnownTileServer('Mapbox');
// Mapbox.setAccessToken('pk.eyJ1IjoiYWRlcmJhbCIsImEiOiJjbGw4YW9ubXAxMHg4M2xtejJ2aXIwMXF1In0.5jaLn8ECANT4_HpG5k4NjA')

function App(): JSX.Element {

  return (
    <Provideres />
    // <View style={styles.page}>
    //   <View style={styles.container}>
    //     <Button onPress={() => { }} title='Teste' />
    //     {/* <Mapbox.MapView style={styles.map} /> */}
    //   </View>
    // </View>
  );
}


export default App;
