import React from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { PatientFormProps, PatientInfo } from '../Types/type';

const { Option } = Select;

const PatientForm: React.FC<PatientFormProps> = ({ form, formData, onFormChange }) => {
  const handleChange = (changedFields: any) => {
    onFormChange({ ...formData, ...changedFields });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onValuesChange={(_, values) => handleChange(values)}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender!' }]}
      >
        <Select placeholder="Select Gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'The input is not a valid email!' },
        ]} 
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { len: 10, message: 'Phone number must be 10 digits long!' },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PatientForm;
