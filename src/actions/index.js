import { createAction } from 'redux-actions';

export const playGame = createAction('PLAY_GAME');
export const setInitActiveTetrominoes = createAction('SET_INIT_ACTIVE_TETROMINOES')
export const pauseGame = createAction('PAUSE_GAME');
export const unpauseGame = createAction('UNPAUSE_GAME');
export const setTetrominoShape = createAction('SET_TETROMINO_SHAPE');
export const setTetrominoName = createAction('SET_TETROMINO_NAME');
export const setTetrominoColor = createAction('SET_TETROMINO_COLOR');
export const setOffsetX = createAction('SET_OFFSET_X');
export const setOffsetY = createAction('SET_OFFSET_Y');
export const rotateRight = createAction('ROTATE_TETROMINO');
export const moveDown = createAction('MOVE_DOWN');
export const moveLeft = createAction('MOVE_LEFT');
export const moveRight = createAction('MOVE_RIGHT');
