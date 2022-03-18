import mongoose from 'mongoose';
declare function MongoDBConnect(): Promise<typeof mongoose>;
export { MongoDBConnect };
