import React from 'react';

const Container = ({title, component}) => {
  return (
    <div className="card mx-auto mt-3 text-center">
      <div className="card-header secondary">
        <h5>{title}</h5>
      </div>
      <div className="card-body row">
      {component}
      </div>
    </div>
  );
};

export default Container