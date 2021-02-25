import React from 'react';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ScrollView, StyleSheet, Text, View, Linking} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.scrollText}>Scrolling Text</Text>
        </View>
        <View>
          <Text style={styles.heading}>Heading</Text>
        </View>
        <View style={styles.articleWrapper}>
          <Text style={styles.subheading}>Subheading 1</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            vitae tortor condimentum lacinia quis vel. Vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit. In nulla posuere
            sollicitudin aliquam ultrices sagittis. Leo integer malesuada nunc
            vel risus. Eu lobortis elementum nibh tellus molestie nunc non
            blandit massa. Scelerisque viverra mauris in aliquam sem fringilla
            ut morbi tincidunt. Sit amet consectetur adipiscing elit duis
            tristique sollicitudin nibh. Id diam maecenas ultricies mi eget
            mauris. Sit amet nisl purus in. Cursus sit amet dictum sit amet
            justo donec. Tellus orci ac auctor augue mauris augue neque. Lacus
            vel facilisis volutpat est velit egestas. Eu lobortis elementum nibh
            tellus molestie nunc non blandit. Pretium aenean pharetra magna ac.
            {'\n'}
          </Text>
          <Text style={styles.subheading}>Subheading 2</Text>
          <Text>
            Enim nec dui nunc mattis. Arcu risus quis varius quam quisque id
            diam vel. Mi bibendum neque egestas congue. Consectetur adipiscing
            elit ut aliquam purus sit. Hendrerit gravida rutrum quisque non
            tellus. Id semper risus in hendrerit gravida. Est sit amet facilisis
            magna etiam tempor orci. Consectetur purus ut faucibus pulvinar
            elementum integer enim neque. Velit dignissim sodales ut eu sem
            integer vitae justo eget. Lorem dolor sed viverra ipsum nunc
            aliquet. Tellus id interdum velit laoreet id. Velit egestas dui id
            ornare. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
            Sit amet purus gravida quis blandit turpis. Purus ut faucibus
            pulvinar elementum integer enim neque volutpat ac.{'\n'}
          </Text>
          <Text style={styles.subheading}>Subheading 3</Text>
          <Text>
            Sit amet cursus sit amet dictum sit. Ultrices gravida dictum fusce
            ut placerat orci nulla. Dolor sit amet consectetur adipiscing elit
            pellentesque. Dignissim suspendisse in est ante in nibh mauris
            cursus mattis. Amet porttitor eget dolor morbi non arcu risus quis.
            Amet justo donec enim diam vulputate ut pharetra sit. At varius vel
            pharetra vel turpis nunc eget. Facilisis gravida neque convallis a
            cras. Sed turpis tincidunt id aliquet risus feugiat in ante. Viverra
            tellus in hac habitasse platea dictumst vestibulum. Mauris
            pellentesque pulvinar pellentesque habitant morbi.{'\n'}
          </Text>
          <Text style={styles.subheading}>Subheading 4</Text>
          <Text>
            Volutpat ac tincidunt vitae semper. Justo donec enim diam vulputate
            ut pharetra sit. Pharetra sit amet aliquam id diam maecenas
            ultricies mi eget. Viverra nam libero justo laoreet. Amet mattis
            vulputate enim nulla aliquet porttitor. Arcu cursus vitae congue
            mauris rhoncus aenean vel elit. Arcu vitae elementum curabitur vitae
            nunc sed velit dignissim sodales. Dolor sit amet consectetur
            adipiscing. Enim nec dui nunc mattis enim ut tellus elementum
            sagittis. Gravida rutrum quisque non tellus orci. Diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Diam
            maecenas sed enim ut sem viverra aliquet eget sit. Odio facilisis
            mauris sit amet massa vitae. Turpis cursus in hac habitasse platea
            dictumst quisque sagittis. Commodo viverra maecenas accumsan lacus
            vel facilisis volutpat.{'\n'}
          </Text>
          <Text style={styles.subheading}>Subheading 5</Text>
          <Text>
            Leo a diam sollicitudin tempor id eu nisl nunc mi. Quam id leo in
            vitae turpis massa sed. Nunc sed velit dignissim sodales ut eu. In
            pellentesque massa placerat duis. Nisi quis eleifend quam
            adipiscing. Nulla facilisi cras fermentum odio eu feugiat pretium
            nibh ipsum. A scelerisque purus semper eget duis at tellus. Sed
            viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nibh
            tortor id aliquet lectus proin nibh nisl condimentum id. Leo integer
            malesuada nunc vel risus.
          </Text>
          <Text
            style={styles.hyperLink}
            onPress={() => Linking.openURL('https://google.com')}>
            {'\n'}klik
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Times New Roman',
  },
  scrollText: {
    backgroundColor: '#645e',
    color: '#fff',
    padding: 5,
    fontSize: 30,
    borderBottomWidth: 3,
  },
  heading: {
    backgroundColor: '#645',
    color: '#fff',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  articleWrapper: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fdf',
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  hyperLink: {
    textDecorationLine: 'underline',
    color: '#33e',
  },
});
