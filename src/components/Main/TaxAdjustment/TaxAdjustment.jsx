import React from 'react';

import Button from './Button';

export default function TaxAdjustment() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-start gap-2 mb-1">
        <p className="text-xl font-bold">돈 버는 서비스</p>
        <img className="h-10" src="/src/assets/images/coin.png"></img>
      </div>

      <div className="w-1/1 bg-blue-700 mb-4" style={{ height: '180px' }}>
        <Button title="testTItle" subTitle="testSUb"></Button>
      </div>

      <div className="flex gap-2">
        <div className="w-1/2 bg-red-700" style={{ height: '140px' }}>
          <Button title="testTItle" subTitle="testSUb"></Button>
        </div>

        <div className="w-1/2 bg-red-200" style={{ height: '140px' }}>
          <Button title="testTItle" subTitle="testSUb"></Button>
        </div>
      </div>
    </div>
  );
}
