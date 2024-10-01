import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      {/* Theme Switch */}
      <Text style={{color:'white'}}>Developer</Text>
      <Text>Github: @Tobinioluwa</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{isDarkMode ? '🌙' : '☀️'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

<View style={israel.display} >

      {/* Button Rows */}
      <View style={styles.buttonRow}>
        {['AC', 'Del', '%', '/'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['7', '8', '9', '*'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['4', '5', '6', '-'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['1', '2', '3', '+'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['0', '.00', '=', '.'].map((item) => (
          <TouchableOpacity key={item} onPress={() => handlePress(item)} style={styles.button}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </View>
  );
}

const israel = StyleSheet.create({
    display: {
     paddingLeft: 40,
     paddingRight:40,
    
    },

})

const buttonBase = {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  width: 70,
  height: 70,
  margin: 8,
};

const textBase = {
  fontSize: 36,
  fontWeight: 'bold',
};

const commonStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 25,
    marginRight: 10,
  },
};

const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#F9F9F9',
  },
  display: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 2,
  },
  inputText: {
    ...textBase,
    color: '#000',
  },
  resultText: {
    fontSize: 28,
    color: '#777',
  },
  button: {
    ...buttonBase,
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    ...textBase,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#000000',
  },
  display: {
    backgroundColor: '#333',
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 2,
  },
  inputText: {
    ...textBase,
    color: '#fff',
  },
  resultText: {
    fontSize: 28,
    color: '#bbb',
  },
  button: {
    ...buttonBase,
    backgroundColor: '#555',
  },
  buttonText: {
    ...textBase,
    color: '#fff',
  },
});
