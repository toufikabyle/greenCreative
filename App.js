import { StatusBar } from 'expo-status-bar';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button, SafeAreaView, Dimensions} from 'react-native';
import { Linking} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {

    const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  
return (
    
<SafeAreaView style={styles.container}>
<View style={styles.contentBorder}>
<View style={styles.contentBorderTwo}>
<View style={styles.header}>
<LinearGradient
// Background Linear Gradient
colors={['#dab636', '#f2e4b6']}
style={styles.headerBackground}
/>
<Text style={styles.h1}>Green Creative</Text>
<Text style={styles.subtitle}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
</View>
<ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>Home</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>About</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>Portfolio</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>Prices</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>Products</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>FAQ</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>Contact</Text>
</View>
</ScrollView>
<ScrollView style={styles.test}>

<View style={styles.test1}>
<LinearGradient
// Background Linear Gradient
colors={['#cbdeba', '#ffffff', '#ffffff', '#ffffff']}
style={styles.testbck}
/>
<Text style={styles.titretext}>Template Usage</Text>
<Text>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy smile
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
<Text style={styles.readmore} onPress={() => Linking.openURL('https://www.html.am/templates/downloads/bryantsmith/greencreative/')}>{"\n"}(read more)</Text>
</View>
<View style={styles.test1}>
<LinearGradient
// Background Linear Gradient
colors={['#cbdeba', '#ffffff', '#ffffff', '#ffffff']}
style={styles.testbck}
/>
<Text style={styles.titretext}>Another Title Goes Here!</Text>
<Text>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
<Text style={styles.readmore} onPress={() => Linking.openURL('https://www.html.am/templates/downloads/bryantsmith/greencreative/')}>{"\n"}(read more)</Text>

</View>
<View style={styles.test1}>
<LinearGradient
// Background Linear Gradient
colors={['#cbdeba', '#ffffff']}
style={styles.testbck}
/>
<Text style={styles.titretext}>Yet Another?</Text>
<Text>Each title is an H1 tag, so choose them carefully smile</Text>
</View>
</ScrollView>
</View>
</View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: "column",
height: "100%",
alignItems: "center",
backgroundColor: '#679159',
alignItems: 'center',
justifyContent: 'center'
},
contentBorder: {
backgroundColor: "#bed2b7",
padding: 15,
borderRadius: 20,
marginTop: 40,
marginLeft: 10,
marginRight: 10
},
contentBorderTwo: {
borderRadius: 20,
backgroundColor: "white",
flex: 1,
flexDirection: "column"
},
header: {
paddingLeft: 10,
paddingRight: 10,
flex: 1,
justifyContent: "center",
height: "100%"
},
headerBackground: {
position: 'absolute',
left: 0,
right: 0,
top: 0,
borderTopLeftRadius:15,
borderTopRightRadius:15,
height: "100%"
},
h1: {
fontWeight: "800",
fontSize: 24,
color: "#283823"
},
subtitle: {
color: "#679159",
fontWeight: "700",
fontSize: 12
},
navContainer: {
flexDirection: "row",
flex: 1
},
navButton: {
flex: 1,
justifyContent: "center",
alignItems: "center",
height: 40,
paddingLeft: 10,
paddingRight: 10
},
navButtonBkg: {
position: 'absolute',
left: 0,
right: 0,
top: 0,
height: "100%"
},
navBtnTxt: {
color: "#fff",
fontWeight: "700",
fontSize: 14
},
readmore: {
fontSize: 15,
},

test1: {
padding:13,
margin:10,
},

titretext: {
paddingLeft:5,
fontWeight: "bold",
fontSize: 13
},

testbck: {
position: 'absolute',
borderTopLeftRadius:20,
borderTopRightRadius:20,
left: 0,
right: 0,
top: 0,
height: "100%",
},

test: {
backgroundColor: "white",
borderRadius:20,
}

});