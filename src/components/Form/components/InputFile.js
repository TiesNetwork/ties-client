class File extends Component {
  static propTypes = {
    accept: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
  }

  handleChange = event => {
    const fileReader = new FileReader()

    fileReader.addEventListener('load', () => {
      let intArray = new Uint8Array(fileReader.result)
        , bufferArray = new Array(intArray.length)
        , i = intArray.length

      while(i--) {
        bufferArray[i] = `0x${(intArray[i] < 16 ? '0' : '') + intArray[i].toString(16)}`
      }

      this.props.onChange && this.props.onChange(new Buffer(bufferArray))
      bufferArray = intArray = i = null
    })

    fileReader.readAsArrayBuffer(event.target.files[0])
  }

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
