export function changeToTitle(str) {
  const words = str.split('-');
  return words.map(word => {
    return capitalize(word)
  }).join(' ');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formateDate(str) {
  const date = str.split('T')[0];
  const dateArr = date.split('-');
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];

  return `${monthToWriting(month)} ${day} ${year}`;
}

function monthToWriting(str) {
  switch (str) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return 'huh?'
  }
}