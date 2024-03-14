import React from 'react';

import Button from './Button';

export default function TaxAdjustment() {
  return (
    <div>
      <div className="w-1/1 bg-blue-700" style={{ height: '200px' }}>
        {' '}
        <Button title="testTItle" subTitle="testSUb"></Button>
      </div>

      <div className="w-1/2 bg-red-700" style={{ height: '200px' }}>
        {' '}
        <Button title="testTItle" subTitle="testSUb"></Button>
      </div>

      <div className="w-1/2 bg-red-200" style={{ height: '200px' }}>
        {' '}
        <Button title="testTItle" subTitle="testSUb"></Button>
      </div>
    </div>
  );
}
