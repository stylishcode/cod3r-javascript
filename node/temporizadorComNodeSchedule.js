const schedule = require('node-schedule')

// */5 -> 5 em 5 segundos
// * em qualquer minuto
// 19 as 19h
// * ignorando dia do mês (pode ser qualquer dia do mês)
// * ignorando o mês (pode ser qualquer mês)
// 4 quinta feira (sendo 0 o domingo)
// obs, esse código só ira começar a executar durante as 19h**
// ate lá, ele fica esperando o horário caso seja rodado antes
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 4', function() {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancelando a tarefa após 20 segundos
setTimeout(() => {
  tarefa1.cancel()
  console.log('Cancelando tarefa 1!')
}, 20000)

// Definindo um scheduleJob com regras ao invés de uma string como no exemplo acima
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // segunda a sexta
regra.hour = 19
regra.second = 30 // sempre aos 30 segundos de cada minuto

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log('Executando tarefa 2!', new Date().getSeconds())
})
