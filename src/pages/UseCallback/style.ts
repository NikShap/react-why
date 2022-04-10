import { SxMap } from "../../types"

export const input: SxMap = {
  blockSx: {
    width: 'unset',
  },

  inputSx: {
    width: '100%',
  },
}

export const taskView: SxMap = {
  containerSx: {
    width: '100%',
  },

  blockSx: {
    width: 'unset',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export const useCallbackView: SxMap = {
  mainBlockSx: {
    width: '400px',
  },

  dividerSx: {
    margin: '20px 0',
  },

  listSx: {
    display: 'flex',
    width: 'unset',
    flexDirection: 'column',
  },
}