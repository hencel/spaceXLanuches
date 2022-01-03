export interface HeaderListItem {
    link: string; title: string
}
export interface HeaderListItems extends Array<HeaderListItem>{};

export interface apiData {
    date_utc: string;
    name: string
}

export interface RoadsterData {
    details: string;
    earth_dist: number;
    mars_dist: number;
    name: string;
    speed_kph: number;
    images: string[];
}