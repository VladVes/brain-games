const games = {};

export const getGame = name =>
  (Object.keys(games).includes(name) ? games[name] : null);

export const definer = (name, desc, body) => {
  games[name] = { desc, body };
};
