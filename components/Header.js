/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('../assets/logo.png')}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        camouflage
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 90,
    paddingTop: 90,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -200,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
