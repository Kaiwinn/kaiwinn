import { isIOS } from '../utilities/Device'
export default {
  h1: isIOS() ? 30 : 28,
  h2: isIOS() ? 25 : 23,
  h3: isIOS() ? 23 : 21,
  h4: isIOS() ? 18 : 16,
  h5: isIOS() ? 16 : 15,
  h6: isIOS() ? 15 : 13,
}
