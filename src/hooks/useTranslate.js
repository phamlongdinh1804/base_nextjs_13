import ja from '../../public/lang/ja.js'
import en from '../../public/lang/en.js'

const useTranslate = () => (key, fallback) => {
  const localLang = 'ja'
  let trans = localLang == 'ja' ? ja : en
  const keys = key.split('.')
  for (const k of keys) {
    if (trans[k] === undefined) {
      return fallback
    }
    trans = trans[k]
  }
  return trans
}

export default useTranslate
