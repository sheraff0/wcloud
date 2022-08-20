import { CustomWritable } from './base'
import { fetchData } from "../utils/api"

const UPLOAD = "upload", CHECK_HASH = "checkHash"

// GENERIC DATASET

class DataSet extends CustomWritable {
  constructor(dataSet) {
    super({
      default: { loading: false, data: null },
      dataSet
    })
  }

  async loadData({ ...options } = {}) {
    await fetchData({ dataSet: this.dataSet, ...options })(this.update)
  }
}

// UPLOAD

class Upload extends DataSet {
  constructor() {
    super(UPLOAD)
    this.TEXT_FILE = "text_file"
  }

  extractData() {
    const { data } = this.getData()
    const { counter=[], stopwords=[] } = data || {}
    this.update(state => ({ ...state, counter, stopwords }))
  }

  checkCounter() {
    const { counter=[], stopwords=[] } = this.getData()
    const maxCount = Math.max(...counter.map(x => x[1]))
    const counterChecked = counter.map(x => {
      return ({
        active: stopwords.indexOf(x[0]) > -1,
        text: x[0],
        size: Math.round(x[1] / maxCount * 100) / 100
      })
    })
    this.update(state => ({ ...state, counterChecked }))
  }

  async loadAndCheck({ form, textParsed }) {
    if (textParsed) {
      const formData = new FormData(form)
      formData.delete(this.TEXT_FILE)
      const data = Object.fromEntries(formData.entries())
      await this.loadData({ data })
    } else {
      await this.loadData({ form })
    }
    this.extractData()
    this.checkCounter()
  }

  updateStopwords(text, func) {
    let { stopwords=[] } = this.getData()
    stopwords = func(stopwords, text)
    this.update(state => ({ ...state, stopwords }))
    this.checkCounter()
  }

  addStopword(text) {
    this.updateStopwords(text, (stopwords, text) =>
      [...new Set([...stopwords, text])]
    )
  }

  removeStopword(text) {
    this.updateStopwords(text, (stopwords, text) =>
      [...stopwords.filter(x => x !== text)]
    )
  }
}

// CHECK HASH

class CheckHash extends DataSet {
  constructor() {
    super(CHECK_HASH)
  }

  extractData() {
    const { data } = this.getData()
    const { textParsed } = data || {}
    this.textParsed = textParsed
  }

  async loadAndCheck({ ...options }) {
    await this.loadData({ ... options })
    this.extractData()
  }
}

export const upload = new Upload()
export const checkHash = new CheckHash()