import React from 'react';
import Button from '@mui/material/Button';
import ContentForm from './ContentForm';
import { addCategoryData } from '../../../common/api/category.api';

function Content(props) {

  const handleFormSubmit = (data) => {
    addCategoryData(data)
  }

  return (
    <>
      <div className='contentTop'>
        <Button variant="outlined" style={{ marginTop: '75px' }}>
          Post Blog
        </Button>
        <ContentForm onHandleSubmit={handleFormSubmit} />
      </div>
    </>
  );
}

export default Content;