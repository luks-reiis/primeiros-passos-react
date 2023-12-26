function Page(){

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
  let saudacao = '';

  if(hour >= 0 && hour < 12){
    saudacao = 'Bom dia 🌞';
  }else if(hour >= 12 && hour < 18){
    saudacao = 'Boa tarde 🌇';
  }else if(hour >= 18 && hour <= 23){
    saudacao = 'Boa noite 😴';
  }

  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="text-9xl">{fullTime}</div>
    <div className="text-5xl font-bold">{saudacao}</div>
  </div>
  );
}

export default Page;