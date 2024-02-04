import { ref, onMounted } from 'vue'

export function useChessboard() {
  const chessboard = ref<any[]>([])
  const colsLabels = 'ABCDEFGH'

  const initializeChessboard = () => {
    for (let i = 0; i < 8; i++) {
      const row: any[] = []
      for (let j = 0; j < 8; j++) {
        const cell = {
          row: i + 1,
          col: colsLabels[j],
          piece: setPieceImageSrc(i + 1, colsLabels[j])
        }
        row.push(cell)
      }
      chessboard.value.push(row)
    }
  }

  onMounted(() => {
    initializeChessboard()
  })

  return {
    chessboard
  }
}

const piecesOnColumn: any = {
  A: 'rook.png',
  B: 'knight.png',
  C: 'bishop.png',
  D: 'queen.png',
  E: 'king.png',
  F: 'bishop.png',
  G: 'knight.png',
  H: 'rook.png'
}

function setPieceImageSrc(row: any, col: any) {
  let imageSrc = ''
  switch (row) {
    case 1:
      imageSrc = `light-${piecesOnColumn[col]}`
      break
    case 2:
      imageSrc = 'light-pawn.png'
      break
    case 7:
      imageSrc = 'dark-pawn.png'
      break
    case 8:
      imageSrc = `dark-${piecesOnColumn[col]}`
      break
    default:
      break
  }

  return imageSrc
}
