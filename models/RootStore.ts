import {Instance, SnapshotOut, types} from 'mobx-state-tree';

import {NoteStoreModel} from './NoteStore';

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  NoteStore: types.optional(NoteStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
