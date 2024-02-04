import type { Cell } from '@/models/Cell'
import { Pieces } from '@/models/Pieces'
import { ref, onMounted } from 'vue'

export function useChessboard() {
  const chessboard = ref<Cell[][]>([])
  const colsLabels = 'ABCDEFGH'

  const initializeChessboard = () => {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        const cell: Cell = {
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

function setPiece(row: number, col: string) {
  let imageSrc = ''
  switch (row) {
    case 1:
      imageSrc = `light${Pieces[col as keyof typeof Pieces]}`
      break
    case 2:
      imageSrc = 'lightPawn'
      break
    case 7:
      imageSrc = 'darkPawn'
      break
    case 8:
      imageSrc = `dark${Pieces[col as keyof typeof Pieces]}`
      break
    default:
      break
  }

  return imageSrc
}
