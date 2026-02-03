import {
  FaGamepad,
  FaGhost,
  FaDragon,
  FaHatWizard,
  FaSpaceShuttle,
  FaRobot,
  FaPuzzlePiece,
  FaMask,
  FaCrown,
  FaFire,
  FaSnowflake,
  FaSun,
  FaMoon,
  FaStar,
  FaHeart,
  FaSkull,
  FaBiohazard,
  FaBrain,
  FaFighterJet,
  FaCar,
  FaFootballBall,
  FaBasketballBall,
  FaRunning,
  FaMusic,
  FaPalette,
  FaCode,
  FaHistory,
  FaGlobeAmericas,
  FaShieldAlt,
  FaMagic,
} from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiSwordman,
  GiCrossedSwords,
} from "react-icons/gi";

// Array of all available icons
export const genreIcons = [
  FaGamepad,
  FaGhost,
  FaDragon,
  FaHatWizard,
  FaSpaceShuttle,
  FaRobot,
  FaPuzzlePiece,
  FaMask,
  FaCrown,
  FaFire,
  FaSnowflake,
  FaSun,
  FaMoon,
  FaStar,
  FaHeart,
  FaSkull,
  FaBiohazard,
  FaBrain,
  FaFighterJet,
  FaCar,
  FaFootballBall,
  FaBasketballBall,
  FaRunning,
  FaMusic,
  FaPalette,
  FaCode,
  FaHistory,
  FaGlobeAmericas,
  FaShieldAlt,
  FaMagic,
  GiNinjaHeroicStance,
  GiSwordman,
  GiCrossedSwords,
];

// Function to get a consistent icon for a genre based on its ID
export const getIconForGenre = (genreId: string, genreName: string) => {
  // Create a hash from genre ID to get consistent icon
  const hash = Array.from(genreId).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0,
  );
  return genreIcons[hash % genreIcons.length];
};

// Genre-specific icon mapping for common genres
export const getSpecificIconForGenre = (genreName: string) => {
  const name = genreName.toLowerCase();

  if (name.includes("action")) return GiCrossedSwords;
  if (name.includes("adventure")) return GiSwordman;
  if (name.includes("role-playing") || name.includes("rpg"))
    return GiNinjaHeroicStance;
  if (name.includes("strategy")) return FaBrain;
  if (name.includes("shooter")) return FaFighterJet;
  if (name.includes("sports")) return FaFootballBall;
  if (name.includes("racing")) return FaCar;
  if (name.includes("simulation")) return FaCode;
  if (name.includes("puzzle")) return FaPuzzlePiece;
  if (name.includes("horror")) return FaGhost;
  if (name.includes("fantasy")) return FaDragon;
  if (name.includes("sci-fi") || name.includes("science"))
    return FaSpaceShuttle;
  if (name.includes("indie")) return FaPalette;
  if (name.includes("arcade")) return FaGamepad;
  if (name.includes("casual")) return FaHeart;
  if (name.includes("platformer")) return FaRunning;
  if (name.includes("music")) return FaMusic;
  if (name.includes("educational")) return FaHistory;

  return genreIcons[Math.floor(Math.random() * genreIcons.length)];
};
