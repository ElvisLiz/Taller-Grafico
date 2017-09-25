


  var tips1 = 'With a good position you can win in Arena';
  var tips2 = 'With Pilar hugging you can avoid CC and damage';
  var tips3 = 'Burst after your enemy use trinket';
  var tips4 = 'Always protect your healer!';

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


