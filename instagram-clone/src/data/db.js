import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    posts: 'username, time, userImg, postMedia, comments, likes, caption, location', // Primary key and indexed props
});