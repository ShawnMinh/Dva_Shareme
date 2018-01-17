import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Steps, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class RegistrationForm extends Component {


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
