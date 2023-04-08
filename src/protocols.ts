export type ApplicationError = {
    name: string;
    message: string;
};

export type Exposition = {
    id: number,
    gallery_name: string,
    artwork?: number,
    artist?: number
}

export type Artist = {
    id?: number,
    name: string
}

export type Artwork = {
    id?: number,
    work_title: string,
    artist_name?: number
}