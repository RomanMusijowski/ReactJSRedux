import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from "./rootReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'event', 'post']
};
const persistedReducer = persistReducer(
    persistConfig,
    rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware));
const persistor = persistStore(store);


export { store, persistor };