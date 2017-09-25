


  var tips1 = 'Last hitting rewards you with extra gold!';
  var tips2 = 'Always peel your Carry they are the main damage!';
  var tips3 = 'Dont start teamfight if you can go for a few towers or Baron!';
  var tips4 = 'Always ward the bush vision is power!';

  now=new Date()
  num=(now.getSeconds() )%4
  document.write('')

  if (num == 0)
    {inf=tips1}
  if (num == 1)
    {inf=tips2}
  if (num == 2)
     {inf = tips3}
   if (num == 3)
      {inf = tips4}
  document.getElementById("frases").textContent=(inf)


