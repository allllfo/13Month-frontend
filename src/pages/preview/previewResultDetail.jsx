import React from "react";
import { Accordion, Checkbox, Label, TextInput, Radio } from "flowbite-react";

const previewResultDetail = () => {
  return (
    <>
      <div>
        <div>
          <div>나의 총 급여</div>
          <div>23,018,432</div>
        </div>
        <Accordion className="m-5">
          <Accordion.Panel>
            <Accordion.Title>
              <div className="flex flex-row">
                <div>나의 공제내역 확인</div>
                <div>확인하기</div>
              </div>
            </Accordion.Title>
            <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
              <div>
                <div>근로소득 공제</div>
                <div>12,122,100</div>
              </div>
              <div>
                <div>
                  <div>종합소득 공제</div>
                  <div>12,122,100</div>
                </div>
                <div>
                  <div>카드공제</div>
                  <div>3,000,000</div>
                </div>
                <div>
                  <div>가족공제</div>
                  <div>3,000,000</div>
                </div>
                <div>
                  <div>전통시장, 도서, 문화</div>
                  <div>3,000,000</div>
                </div>
                <div>
                  <div>4대보험</div>
                  <div>3,000,000</div>
                </div>
                <div>
                  <div>주택공제</div>
                  <div>3,000,000</div>
                </div>
                <div>
                  <div>기타공제</div>
                  <div>3,000,000</div>
                </div>
              </div>

              <div>
                <div>공제 후 세금</div>
              </div>

              <div>
                <div className="mt-3">
                  <div className="max-w-md"></div>

                  <div className="max-w-md"></div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default previewResultDetail;
