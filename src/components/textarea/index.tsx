import React, {InputHTMLAttributes} from 'react';

import {TextAreaBlock} from './styles';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
  return (
    <TextAreaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaBlock>
  );
};

export default Textarea;
