import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import {SkilData} from '../interfaces/SkillData';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkilData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour <= 12) {
      setGretting('Bom dia');
    } else if (hour >= 13 && hour <= 18) {
      setGretting('Boa tarde');
    } else {
      setGretting('Boa noite');
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, Carlos</Text>
        <Text style={styles.gretting}>{gretting}</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="white"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill} title="New" activeOpacity={0.6} />
        <Text style={[styles.title, {marginTop: 50}]}>My skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gretting: {
    color: 'white',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
});
