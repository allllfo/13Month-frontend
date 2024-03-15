import React from 'react';

import Services from './Services';
import Hello from './Hello';

export default function TaxAdjustment() {
  // 유저 정보 가져오기
  const nickname = 'testName';

  return (
    <div>
      <Hello nickname={nickname}></Hello>
      <Services></Services>
    </div>
  );
}
