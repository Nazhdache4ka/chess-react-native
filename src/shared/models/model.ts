import { ICastleRights } from '../types';

export const MAX_ROW = 7;
export const MAX_COL = 7;

export const MIN_ROW = 0;
export const MIN_COL = 0;

export const INITIAL_CASTLE_RIGHTS: ICastleRights = {
  white: {
    hasKingMoved: false,
    hasRookKingSideMoved: false,
    hasRookQueenSideMoved: false,
  },
  black: {
    hasKingMoved: false,
    hasRookKingSideMoved: false,
    hasRookQueenSideMoved: false,
  },
};
