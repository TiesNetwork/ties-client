import Frame from 'canvas-to-buffer';

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

  handleChange = event => {
    const MAX_WIDTH = 200;
    const MAX_HEIGHT = 200;

    const file = event.target.files[0];
    const img = document.createElement('img');
    const reader = new FileReader();

    img.onload = event => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const frame = new Frame(canvas);

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      this.props.onChange && this.props.onChange(frame.toBuffer());
    };

    reader.onload = event => { img.src = event.target.result; };
    reader.readAsDataURL(file);
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
