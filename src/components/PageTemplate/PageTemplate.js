import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/* This is components for page template. 
  Page's tool and attributes like title/contents is set.
*/

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
        <h1>Schedule Management</h1>
        <div className={cx('content')}>
          {children}
        </div>
        </div>
    );
};

export default PageTemplate;
