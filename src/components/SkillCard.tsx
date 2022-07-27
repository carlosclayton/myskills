import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SkillCardProps} from '../pages/SkillCardProps';

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  textSkill: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
