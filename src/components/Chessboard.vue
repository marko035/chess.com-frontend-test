<script setup lang="ts">
import { useChessboard } from '../composables/useChessboard.js'

const { chessboard } = useChessboard()
</script>

<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in chessboard" :key="rowIndex" class="row">
      <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell">
        <!-- {{ cell.col }}{{ cell.row }} -->

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
  background-image: url('../assets/images/chessboard.png');
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

  .cell:hover {
    background-color: #f5f58a;
  }

  .rowLabel {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .columnLabel {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  .odd {
    color: #edeed1;
  }

  .even {
    color: #779952;
  }
}

@media only screen and (min-width: 600px) {
  .chessboard {
    height: calc(100% - 100px);
    width: unset;
  }
}
</style>
