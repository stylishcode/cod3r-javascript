//EVITAR O USO DE BREAK E CONTINUE AO MÁXIMO
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break vai interromper o laço e ir para a próxima sentença de código fora do laço atual
//for in
for (x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);//1, 2, 3, 4, 5
}

/*
  continue vai interromper a iteração atual e ir para a próxima iteração, sem interromper
  o laço atual
*/
for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[y]}`); //1, 2, 3, 4, 5, 7, 8, 9, 10
}