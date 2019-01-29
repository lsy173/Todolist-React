import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// Component with input and button.
/*
  value: input value.
  onChange: input change event.
  onInsert: add button click event.
*/

const TodoInput = ({value, onChange, onInsert}) => {
    
    // If 'Enter' is pressed, execute onInsert.
    const handleKeyPress = (e) => {
        if( e.key == 'Enter')
        onInsert();
    }

    return (
        <div className={cx('todo-input')}>
          <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
          <div className={cx('add-button')} onClick={onInsert}>Add</div>
        </div>
    );
};

export default TodoInput;
