import { v4 as uuidV4 } from 'uuid';

class Character {
    _id: string;
    player_id: string;
    nickname: string;
    realm: string;
    class: string;
    main_spec: string;
    active_spec: string;
    gear_iLvl: number;
    covenant: string;
    mythic_plus_score_tank_current: number;
    mythic_plus_score_dps_current: number;
    mythic_plus_score_healer_current: number;
    raiderio_profile_link: string;
    created_at: Date;
    updated_at: Date;

    constructor() {
        if (!this._id) {
            this._id = uuidV4();
        }

        if (!this.created_at) {
            this.created_at = new Date();
        }
    }
}

export { Character };
