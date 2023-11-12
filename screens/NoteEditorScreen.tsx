import {observer} from 'mobx-react-lite';
import React, {FC, useRef, useState} from 'react';
import {TextStyle} from 'react-native';
import {Colors, SegmentedControl, TextField, View} from 'react-native-ui-lib';
import {Header} from '../components/Header';
import {Screen} from '../components/Screen';
import {useStores} from '../models';
import {groups} from '../models/groups.json';

interface NoteEditorScreenProps {}

export const NoteEditorScreen: FC<NoteEditorScreenProps> = observer(
  function NoteEditorScreen(_props) {
    const {
      navigation,
      route: {params},
    } = _props;
    const {
      NoteStore: {addNote, editNote, notes},
    } = useStores();
    const inputRef = useRef(null);
    const [note, setNote] = useState(notes[params?.id]?.note || '');
    const [group, setGroup] = useState(notes[params?.id]?.group || 0);

    const onDone = () => {
      params?.mode === 'add'
        ? addNote(note, group, params?.client)
        : editNote(params?.id, note, group, params?.client);
      navigation.goBack();
    };

    return (
      <Screen>
        <Header
          leftIcon="arrow-left"
          onLeftPress={() => navigation.goBack()}
          rightText="Done"
          onRightPress={onDone}
        />
        <View flex padding-20 top>
          <TextField
            ref={inputRef}
            autoFocus
            value={note}
            onChangeText={setNote}
            style={$TextArea}
            color={Colors.textColor}
            placeholder="Write your note..."
            multiline
          />
        </View>
        <View paddingB-5>
          <SegmentedControl
            initialIndex={group}
            onChangeIndex={index => setGroup(index)}
            segments={Object.values(groups).map(g => ({
              label: g.name,
            }))}
          />
        </View>
      </Screen>
    );
  },
);
const $TextArea: TextStyle = {
  fontSize: 25,
};
