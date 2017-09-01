const games = {};

export const getGame = name => (games[name]);

export const definer = (name, desc, body) => {
  games[name] = { desc, body };
};
