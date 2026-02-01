export interface PaginationResult<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface GameDTO {
  id: string;
  slug: string;
  name: string;
  description?: string;
  released: string; // ISO date string
  rating?: number;
  ratingsCount?: number;
  metacritic: number;
  tags: string[];
  backgroundImage?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  genres: GameGenreDTO[];
  platform: string[];
}
export type FetchGamesResponse = PaginationResult<GameDTO>;

export interface GameGenreDTO {
  id: string;
  gameId: string;
  genreId: string;
  genre: GenreDTO;
}
export interface GameListItemDTO {
  id: string;
  slug: string;
  name: string;
  rating?: number;
  backgroundImage?: string;
  genres: GenreDTO[];
}

export interface GenreDTO {
  id: string;
  name: string;
  slug: string;
}
