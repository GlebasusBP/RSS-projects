function getTimeOfDay(){
  const hours = new Date().getHours();
  let arrTimeOfDay = ['night', 'morning', 'afternoon', 'evening'];
  const index = Math.floor(hours / 6);
  return arrTimeOfDay[index];
}

export default getTimeOfDay;