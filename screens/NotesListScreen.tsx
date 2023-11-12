import {observer} from 'mobx-react-lite';
import moment from 'moment';
import React, {FC, useState} from 'react';
import {Alert, FlatList, ViewStyle} from 'react-native';
import {
  Badge,
  Button,
  Card,
  Colors,
  Picker,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from '../components/Header';
import {Screen} from '../components/Screen';
import {useStores} from '../models';
import {clients, groups} from '../models/groups.json';

interface NotesListScreenProps {}

export const NotesListScreen: FC<DetailScreenProps> = observer(
  function NotesListScreen(_props) {
    const {navigation} = _props;
    const {
      NoteStore: {notes, deleteNote},
    } = useStores();
    const [editMode, setEditMode] = useState(false);
    const [client, setClient] = useState();
    return (
      <Screen>
        <Header
          rightText={editMode ? 'Done' : 'Edit'}
          onRightPress={() => setEditMode(old => !old)}
        />
        <View flex padding-20>
          <View spread row centerV>
            <Text text30BO marginB-20 color={Colors.textColor}>
              Notes
            </Text>
          </View>
          <View row paddingB-20>
            {Object.values(groups).map((group, i) => (
              <Button
                onPress={() =>
                  Alert.alert('this would be used to filter groups')
                }
                enableShadow
                key={i + ''}
                round
                style={$smallButtons}
                marginR-20
                backgroundColor={group.color}
                outlineColor={'#fff'}
                outlineWidth={2}
              />
            ))}
          </View>
          <Card padding-20 enableShadow={false}>
            {/*GridList extends RN flatlist*/}
            <FlatList
              ListEmptyComponent={
                <View center>
                  <Text color={Colors.textColor}>No notes</Text>
                  <Icon name="note-outline" size={70} color={Colors.grey30} />
                </View>
              }
              data={Object.values(notes) || []}
              numColumns={1}
              keepItemSize={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  spread
                  row
                  paddingB-20
                  onPress={() =>
                    navigation.navigate('NoteEditor', {
                      mode: 'edit',
                      id: item.id,
                    })
                  }>
                  <View width={'50%'}>
                    <View row centerV spread marginB-5>
                      <View>
                        <Text numberOfLines={1}>
                          {clients[item.client]?.name}
                        </Text>
                      </View>
                    </View>
                    <View row centerV spread marginB-5>
                      <View>
                        <Text numberOfLines={1}>{item.note}</Text>
                      </View>
                    </View>

                    <Text marginB-5>
                      {moment.unix(item.timestamp).format('DD/MM/YYY HH:mm')}
                    </Text>

                    <View row centerV>
                      <Badge
                        size={16}
                        backgroundColor={groups[item.group]?.color}
                        marginR-10
                      />

                      <Text>{groups[item.group]?.name}</Text>
                    </View>
                  </View>
                  {editMode && (
                    <TouchableOpacity
                      onPress={() => deleteNote(item.id)}
                      padding-10>
                      <Icon
                        name="delete-outline"
                        color={Colors.$iconPrimary}
                        size={25}
                      />
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              )}
            />
          </Card>
        </View>
        <View row right>
          <Picker
            items={Object.values(clients).map((x, i) => ({
              label: x.name,
              value: i,
            }))}
            value={client}
            placeholder={'Placeholder'}
            onChange={v => {
              setClient(v);
              //wait until modal has closed
              setTimeout(
                () =>
                  navigation.navigate('NoteEditor', {
                    mode: 'add',
                    id: null,
                    client: v,
                  }),
                100,
              );
            }}
            renderPicker={() => (
              <TouchableOpacity padding-20>
                <Icon
                  name="square-edit-outline"
                  size={30}
                  color={Colors.$iconPrimary}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Screen>
    );
  },
);

const $smallButtons: ViewStyle = {
  width: 20,
  height: 20,
};
