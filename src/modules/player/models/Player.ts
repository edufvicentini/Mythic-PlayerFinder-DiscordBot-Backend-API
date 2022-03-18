import { v4 as uuidV4 } from 'uuid';

class Player {
    _id?: string;
    discord_username: string;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
    created_at: Date;

    constructor() {
        if (!this._id) {
            this._id = uuidV4();
        }

        if (!this.created_at) {
            this.created_at = new Date();
        }
    }
}

export { Player };
