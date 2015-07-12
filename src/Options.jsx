'use strict';

let React = require('react');
let Select = require('rc-select');
let Option = Select.Option;

class Options extends React.Component {
  constructor(props) {
    super(props);
    ['_quickGo', '_changeSize'].map((method) => this[method] = this[method].bind(this));
  }
  render() {
    let props = this.props;
    let changeSize = props.changeSize;
    let quickGo = props.quickGo;

    let changeSelect = null;
    let goInput = null;

    if (changeSize) {
      changeSelect = (
       <Select showSearch={false} className="size-changer" defaultValue="10" onChange={this._changeSize}>
        <Option value="10">10 条/页</Option>
        <Option value="20">20 条/页</Option>
        <Option value="30">30 条/页</Option>
        <Option value="40">40 条/页</Option>
       </Select>
      );
    }

    if (quickGo) {
      goInput = (
        <div className="quick-jumper">
          跳至
          <input type="text" value={props.current} onChange={this._quickGo} />
          页
        </div>
      );
    }

    return (
      <div className="options">
        {changeSelect}
        {goInput}
      </div>
    );
  }

  _changeSize(value) {
    this.props.changeSize(Number(value));
  }
  _quickGo(evt) {
    this.props.quickGo(Number(evt.target.value));
  }
}

Options.propTypes = {
  changeSize: React.PropTypes.func,
  quickGo: React.PropTypes.func
};

module.exports = Options;
