const FileConverters = {
  DEFAULT: (files, toBuffer, callback) => {
    callback && callback(files)
  },
  HEX: (files, toBuffer, callback) => {
    const fileReader = new FileReader()

    fileReader.addEventListener('load', () => {
      let intArray = new Uint8Array(fileReader.result)
        , bufferArray = new Array(intArray.length)
        , i = intArray.length

      while(i--) {
        bufferArray[i] = `${toBuffer ? '0x' : ''}${(intArray[i] < 16 ? '0' : '') + intArray[i].toString(16)}`
      }

      callback && callback(toBuffer ? Buffer.from(bufferArray, 'hex') : `0x${bufferArray.join('')}`)
      bufferArray = intArray = i = null
    })

    fileReader.readAsArrayBuffer(files[0])
  }
}

class File extends Component {
  static propTypes = {
    accept: PropTypes.string,
    converter: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    toBuffer: PropTypes.bool
  }

  static defaultProps = {
    converter: FileConverters.DEFAULT,
    toBuffer: false
  }

  static CONVERTER = FileConverters

  handleChange = event => this.props.converter(event.target.files, this.props.toBuffer, this.props.onChange)

  render() {
    return (
      <div className={styles.InputFile}>
        <label
          className={styles.InputFileLabel}
          htmlFor={this.props.id}
        >
          {this.props.label}

          <input
            accept={this.props.accept}
            className={styles.InputFileControl}
            id={this.props.id}
            name={this.props.name}
            onChange={this.handleChange}
            type="file"
          />
        </label>
      </div>
    )
  }
}

export default File
