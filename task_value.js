let a = 48;
let b = Math.random();
let bMax = Math.random(Math.max(b));
b = Math.floor(Math.random() * bMax);
console.log(a + b / 5 + 17);
/*
сначала произошло деление
затем первое сложение
и в конце еще одно сложение
т.о. приоритет операторов в JS соответствует правилам математики.
*/
