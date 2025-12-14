import { ICastleRights } from '../types';

export function getInitialCastleRights(): ICastleRights {
  return {
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
}
