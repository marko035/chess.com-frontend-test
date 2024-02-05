// import all chesspieces images
import darkKing from '/dark-king.png'
import darkQueen from '/dark-queen.png'
import darkBishop from '/dark-bishop.png'
import darkKnight from '/dark-knight.png'
import darkRook from '/dark-rook.png'
import darkPawn from '/dark-pawn.png'
import lightKing from '/light-king.png'
import lightQueen from '/light-queen.png'
import lightBishop from '/light-bishop.png'
import lightKnight from '/light-knight.png'
import lightRook from '/light-rook.png'
import lightPawn from '/light-pawn.png'

export function usePiecesImages() {
  const piecesImages: any = {
    darkKing,
    darkQueen,
    darkBishop,
    darkKnight,
    darkRook,
    darkPawn,
    lightKing,
    lightQueen,
    lightBishop,
    lightKnight,
    lightRook,
    lightPawn
  }

  return { piecesImages }
}
