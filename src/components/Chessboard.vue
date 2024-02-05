<script setup lang="ts">
import { ref } from 'vue'
import { useChessboard } from '../composables/useChessboard.js'
import { usePiecesImages } from '@/composables/usePiecesImages'
import type { Cell } from '@/models/Cell'

const emit = defineEmits<{
  (e: 'onCellClick', cellId: string): void
}>()

const selectedCell = ref<string>('')

const { chessboard } = useChessboard()
const { piecesImages } = usePiecesImages()

function selectCell(cell: Cell) {
  selectedCell.value = cell.col + cell.row
  emit('onCellClick', cell.col + cell.row)
}
</script>

<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in chessboard" :key="rowIndex" class="row">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="cell"
        :class="{
          selected: selectedCell === cell.col + cell.row
        }"
        @click="selectCell(cell)"
      >
        <img v-if="cell.piece" class="piece" :src="piecesImages[cell.piece]" alt="" />

        <template v-if="cell.col === 'A'">
          <span :class="['rowLabel', cell.row % 2 === 0 ? 'even' : 'odd']">{{ cell.row }}</span>
        </template>

        <template v-if="cell.row === 1">
          <span :class="['columnLabel', (colIndex + 1) % 2 === 0 ? 'even' : 'odd']">{{
            cell.col
          }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scopped lang="scss">
.chessboard {
  background-image: url('/chessboard.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  border-radius: 9px;

  & > div {
    display: flex;
    justify-content: space-around;
    flex: 1;
  }

  .cell {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .cell.selected {
    background-color: #f5f58a;
  }

  .rowLabel {
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 0.5rem;
  }

  .columnLabel {
    position: absolute;
    bottom: 3px;
    right: 3px;
    font-size: 0.5rem;
  }

  .odd {
    color: #edeed1;
  }

  .even {
    color: #779952;
  }

  .piece {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .chessboard {
    height: calc(100% - 100px);
    width: unset;
  }

  .rowLabel,
  .columnLabel {
    font-size: 1rem !important;
  }
}
</style>
