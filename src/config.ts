export interface PageRoute {
  pathname: string;
  title: string;
}

export const routes: PageRoute[] = [
  { pathname: "/", title: "Home" },
  { pathname: "/characters", title: "Characters" }
];

export const baseUrl = "https://www.dndbeyond.com/";
export const charactersUrl = `${baseUrl}characters/`;
export const characters = [6519861, 6522112, 12655031, 6687771, 6521415];

export const getJsonUrlForCharacter = (characterId: number) =>
  `${baseUrl}character/${characterId}/json`;

export default {
  baseUrl,
  charactersUrl,
  getJsonUrlForCharacter,
  characters,
  routes
};
