import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import moment from 'moment';
import uuid from 'react-native-uuid';
interface note {
  id: string;
  timestamp: number;
  note: string;
  group: number;
  client: number;
}
export const NoteStoreModel = types
  .model('NoteStore')
  .props({
    notes: types.frozen({}),
  })
  .actions(self => ({
    clearAll() {
      self.notes = {};
    },
    addNote(note: string, group: number, client: number) {
      let copy: {[key: string]: any} = {...self.notes};
      let id: string = uuid.v1() + '';
      let entry: note = {
        id: id,
        note: note,
        timestamp: moment().unix(),
        group: group,
        client: client,
      };

      copy[id] = entry;
      self.notes = copy;
    },
    editNote(key: string, note: string, group: number, client: number) {
      let copy: {[key: string]: any} = {...self.notes};
      let entry: note = {
        id: key,
        note: note,
        timestamp: moment().unix(),
        group: group,
        client: client,
      };
      copy[key] = entry;
      self.notes = copy;
    },
    deleteNote(key: string) {
      let copy: {[key: string]: any} = {...self.notes};
      delete copy[key];
      self.notes = copy;
    },
  }));

export interface NoteStore extends Instance<typeof NoteStoreModel> {}
export interface NoteStoreSnapshot extends SnapshotOut<typeof NoteStoreModel> {}

// @demo remove-file
