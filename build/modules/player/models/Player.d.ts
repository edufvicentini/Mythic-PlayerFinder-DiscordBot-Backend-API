declare class Player {
    _id?: string;
    discord_username: string;
    discord_userid: string;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
    created_at: Date;
    constructor();
}
export { Player };
