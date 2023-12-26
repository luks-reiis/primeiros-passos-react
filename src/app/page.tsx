"use client"

function Page(){
  function exibirMsg(msg: string){
    alert(msg)
  }


  return (
  <div className="w-screen h-screen flex justify-center items-center gap-10">
    <button onClick={() => exibirMsg('mensagem 1')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui 1</button>
    <button onClick={() => exibirMsg('mensagem 2')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui 2</button>
  </div>
  );
}

export default Page;