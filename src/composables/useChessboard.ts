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
          piece: setPiece(i + 1, colsLabels[j])
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
  A: 'Rook',
  B: 'Knight',
  C: 'Bishop',
  D: 'Queen',
  E: 'King',
  F: 'Bishop',
  G: 'Knight',
  H: 'Rook'
}

function setPiece(row: any, col: any) {
  let imageSrc = ''
  switch (row) {
    case 1:
      imageSrc = `light${piecesOnColumn[col]}`
      break
    case 2:
      imageSrc = 'lightPawn'
      break
    case 7:
      imageSrc = 'darkPawn'
      break
    case 8:
      imageSrc = `dark${piecesOnColumn[col]}`
      break
    default:
      break
  }

  return imageSrc
}
