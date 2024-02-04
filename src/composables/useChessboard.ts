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
          piece: null
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
