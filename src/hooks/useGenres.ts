import type { GenreDTO } from "../types/GameTypes";
import useData from "./UseData";

const useGenres = () => useData<GenreDTO>("/genre/stats");

export default useGenres;
