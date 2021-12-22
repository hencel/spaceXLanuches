export interface HeaderListItem {
    link: string; title: string
}
export interface HeaderListItems extends Array<HeaderListItem>{};

export interface apiData {
    date_utc: string;
    name: string
}