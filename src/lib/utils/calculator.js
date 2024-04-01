// 생일 -> 만나이
export function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// 총급여를 기반으로 근로소득공제액 계산
export function getEITC(salary) {
  const unit = 10000;
  if (salary <= 500 * unit) return salary * 0.7;
  else if (salary <= 1500 * unit)
    return 350 * unit + (salary - 500 * unit) * 0.4;
  else if (salary <= 4500 * unit)
    return 750 * unit + (salary - 1500 * unit) * 0.15;
  else if (salary <= 10000 * unit)
    return 1200 * unit + (salary - 4500 * unit) * 0.05;
  else return 1475 * unit + (salary - 10000 * unit) * 0.02;
}

// 간이세액으로 기납부액(낸세금)을 계산하는 함수
export function getTax(salary) {
  // 총급여 -> 간이세액 https://www.payzon.co.kr/pzNoti/1/1378/
  // 회사마다 다르고 부양가족 등등 신경쓸게 많지만 우선 아래 표를 기준으로 함.
  // https://help.3o3.co.kr/hc/ko/articles/17196014103321-%EC%9B%90%EC%B2%9C%EC%84%B8%EC%99%80-%EC%9B%90%EC%B2%9C%EC%A7%95%EC%88%98%EC%9C%A8-%EA%B3%84%EC%82%B0-%EC%86%8C%EB%93%9D-%EC%9C%A0%ED%98%95%EB%B3%84
  const simpleTaxRate = [
    [1400, 0.06],
    [5000, 0.15],
    [8800, 0.24],
    [15000, 0.35],
    [30000, 0.38],
    [50000, 0.4],
    [0, 0.42],
  ];

  let taxPaid;
  let simpleTaxRow;
  for (let row of simpleTaxRate) {
    if (salary <= row[0] * 10000 || row[0] === 0) {
      taxPaid = salary * row[1];
      simpleTaxRow = row;
      break;
    }
  }

  return taxPaid;
}

// 세율을 기준으로 세금을 계산하는 함수
export function getTaxToPaid(salary) {
  // 근로소득금액 과세표준 https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=6437&cntntsId=7873

  const taxRate = [
    [1400, 0, 0],
    [5000, 84, 0.06],
    [8800, 624, 0.24],
    [15000, 1536, 0.35],
    [30000, 3706, 0.38],
    [50000, 9406, 0.4],
    [100000, 17406, 0.42],
    [0, 38406, 0.45],
  ];

  let taxToPaid;

  for (let i = 0; i < taxRate.length; i++) {
    if (salary <= taxRate[i][0] * 10000 || taxRate[i][0] === 0) {
      taxToPaid = taxRate[i][1] * 10000;
      taxToPaid += (salary - taxRate[Math.max(i - 1, 0)][0]) * taxRate[i][2];
      break;
    }
  }

  return taxToPaid;
}

// json 모든 값 더해주기
export function getTotalValue(json) {
  let totalSum = 0;
  for (const key in json) {
    totalSum += json[key];
  }

  return totalSum;
}
