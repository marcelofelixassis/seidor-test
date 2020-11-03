import { createStore, Store } from 'redux';
import rootReducer from './ducks/rootReducer';
import { UsersState } from './ducks/users/types';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface AppState {
    users: UsersState,
}

const persistConfig = {
    key: 'persistredux',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<AppState> = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};